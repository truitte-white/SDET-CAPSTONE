import { test, expect } from '@playwright/test';

test('This is an API GET call to return the customer list email, first name, and last name in the console, then sort by email and return in console', async ({ request }) => {
    let response = await request.get("/contacts") //get request for contact data
    let customerData = await response.json() //stores the response data in a json
//pulls email firstName and lastName data out of the contacts and maps it together
    console.log(await customerData) //shows the unorderd data in the Test Results window below

  });


  test('This is an API POST to get a Bearer Token for the user', async ({ request }) => {
    let response = await request.post("/users/login", {
        data: {
            "email": "truitte.white@rfsmart.com",
            "password": "testing123"
        }
      });
    let customerData = await response.json() 
    console.log(await customerData) 
  });


