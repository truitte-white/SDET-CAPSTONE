import { test, expect } from '@playwright/test';
let emailToFind = 'findme@robot.com'

test('This test GETs a users ID, searching by their email, then stores the ID and uses the ID to DELETE the customer from the list', async ({ request }) => {
    let responseGet = await request.get("/contacts")
    let customerData = await responseGet.json()
    expect(responseGet.status()).toBe(200)
    let customer = customerData.find((c) => c.email === emailToFind)
    let custId = customer['_id']
    console.log(await custId)
    console.log(await customer)

    let responseDelete = await request.delete(`/contacts/${custId}`)
    expect(responseDelete.status()).toBe(200)
  });

