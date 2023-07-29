import { test, expect } from '@playwright/test';

let firstNameCon = 'Fake'
let lastNameCon = 'Person'
let emailCon = 'findme@robot.com'
let birthdateCon = '2000-01-01'
let phoneCon = '9995555555'
let street1Con = '500 Cyber Ct.'
let street2Con = 'Warehouse X'
let cityCon = 'Internet'
let stateProvinceCon = 'Web'
let postalCodeCon = '123456'
let countryCon = 'None'

test('This test is to add(POST)a contact to the contact list and verify the contact details added', async ({ request }) => {
    let response = await request.post("/contacts", { //post request and response variable, data below added to post
      data: { 
        "firstName": "Fake",
        "lastName": "Person",
        "birthdate": "2000-01-01",
        "email": "findme@robot.com",
        "phone": "9995555555",
        "street1": "500 Cyber Ct.",
        "street2": "Warehouse X",
        "city": "Internet",
        "stateProvince": "Web",
        "postalCode": "123456",
        "country": "None"
      }
    });
    expect(response.status()).toBe(201) //http 201 status for created
    let contactData = await response.json() //json where data is stored 
    //verifications of data created 
    expect(contactData.firstName).toBe(firstNameCon)
    expect(contactData.lastName).toBe(lastNameCon)
    expect(contactData.email).toBe(emailCon)
    expect(contactData.birthdate).toBe(birthdateCon)
    expect(contactData.phone).toBe(phoneCon)
    expect(contactData.street1).toBe(street1Con)
    expect(contactData.street2).toBe(street2Con)
    expect(contactData.city).toBe(cityCon)
    expect(contactData.stateProvince).toBe(stateProvinceCon)
    expect(contactData.postalCode).toBe(postalCodeCon)
    expect(contactData.country).toBe(countryCon)
  });

