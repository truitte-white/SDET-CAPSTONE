import { test, expect } from '@playwright/test';

test('This is an API GET call to check if bearer token worker or not, if it does not work a message is returned in the console that authorization is needed', async ({ request }) => {
    let response = await request.get("/contacts") 
    expect(response.status()).toBe(401) //http unauthorized response status code
    let infoAuth = await response.json() 
    expect(infoAuth).toEqual({ error: "Please authenticate." }) //verify that text matches for the error
    console.log(await infoAuth) //display the error in the console
  });

  test('This is an API POST to get a Bearer Token for the user', async ({ request }) => {
    let response = await request.post("/users/login", {
        data: {
            "email": "truitte.white@rfsmart.com",
            "password": "testing123"
        }
      });
    expect(response.status()).toBe(200)
    let newToken = await response.json() 
    console.log(await newToken) //copy token from console and paste in playwright.config.js
  });


