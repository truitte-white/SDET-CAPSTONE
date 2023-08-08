import { test, expect } from '@playwright/test';
let emailToFind = 'findme@robot.com'

test('Test that a PUT call can update a customer phone number. Use a GET to grab the customer ID, then update the phone number with a PUT', async ({ request }) => {
  let responseGet = await request.get("/contacts")
  let customerData = await responseGet.json()
  let customer = customerData.find((c) => c.email === emailToFind)//finds the customer by their email
  let custId = customer['_id']//finds the customer id and stores as a vairable  to use in the PUT below to be able to update the customer info
  console.log('Customer data:', customer)//shows the current customer data in console below
  console.log('Current phone number:', customer.phone)//shows the current phone number in the console below
  let responsePut = await request.put(`/contacts/${custId}`, {
    data: {
      _id: `${custId}`,
      lastName: "Person",
      firstName: "Fake",
      birthdate: "2000-01-01",
      email: "findme@robot.com",
      phone: "1112223333",
      street1: "500 Cyber Ct.",
      street2: "Warehouse X",
      city: "Internet",
      stateProvince: "Web",
      postalCode: "12345",
      country: "None",
    },
  })
    expect(responseGet.status()).toBe(200) // http The request has succeeded
    let customerUpdate = await responsePut.json()
    expect(customerUpdate.phone).toBe("1112223333") //verify the updated number matches
    console.log('Updated phone number:', customerUpdate.phone)//shows the updated phone number in the console
    console.log('Updated customer data:', customerUpdate)//shows the updated customer data in the console
   });

