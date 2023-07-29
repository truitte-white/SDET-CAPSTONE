import { test, expect } from '@playwright/test';
let emailToFind = 'findme@robot.com'

test('Test that a PUT call can update a customer name. Use a GET to check the customer name, then update the name with a PUT', async ({ request }) => {
  let responseGet = await request.get("/contacts")
  let customerData = await responseGet.json()
  let customer = customerData.find((c) => c.email === emailToFind)
  let custId = customer['_id']
  console.log('Customer data:', customer)
  console.log('Current phone number:', customer.phone);
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
    expect(responseGet.status()).toBe(200)
    let customerUpdate = await responsePut.json()
    console.log('Updated phone number:', customerUpdate.phone);
    console.log('Updated customer data:', customerUpdate)
   });

