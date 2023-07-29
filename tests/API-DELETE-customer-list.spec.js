import { test, expect } from '@playwright/test';
let emailToFind = 'findme@robot.com'

test('This test GETs a users ID, searching by their email, then stores the ID and uses the ID to DELETE the customer from the list', async ({ request }) => {
    let responseGet = await request.get("/contacts")
    let customerData = await responseGet.json()
    expect(responseGet.status()).toBe(200)//http status message for success
    let customer = customerData.find((c) => c.email === emailToFind)//finds the customer by their email
    let custId = customer['_id']//finds the cusomer by their email and stores in a variable to be used in the delete request below
    expect(customer).toBeDefined()//assertion that the customer is defined
    expect(custId).toBeDefined()//assertion the customer is is defined
    console.log(await custId)
    console.log(await customer)

    let responseDelete = await request.delete(`/contacts/${custId}`)
    expect(responseDelete.status()).toBe(200)//http status message for success

    let response = await request.delete(`/contacts/${custId}`)
    expect(response.status()).toBe(404) //http status message for not found, if the customer is deleted then the GET would be not found
  });

