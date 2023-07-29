import { test, expect } from '@playwright/test';

test('This is an API GET call to return the customer list email, first name, and last name in the console, then sort by email and return in console', async ({ request }) => {
    let response = await request.get("/contacts") //get request for contact data
    let customerData = await response.json() //stores the response data in a json
    let customers = customerData.map(({ email, firstName, lastName }) => ({ email, firstName, lastName })) //pulls email firstName and lastName data out of the contacts and maps it together
    console.log(await customers) //shows the unorderd data in the Test Results window below
    //this is just to show that the data is unordered
    expect(customers[0].email).toBe('jadoe@fake.com')
    expect(customers[0].firstName).toBe('Jane')
    expect(customers[0].lastName).toBe('Doe')
    expect(customers[1].email).toBe('jdoe@fake.com')
    expect(customers[1].firstName).toBe('John')
    expect(customers[1].lastName).toBe('Doe')
    expect(customers[2].email).toBe('reallyreal@real.com')
    expect(customers[2].firstName).toBe('Danny')
    expect(customers[2].lastName).toBe('Real')
    expect(customers[3].email).toBe('zebest@new.com')
    expect(customers[3].firstName).toBe('Alphie')
    expect(customers[3].lastName).toBe('Thomas')
    expect(customers[4].email).toBe('admin@sports.ca.com')
    expect(customers[4].firstName).toBe('Brooke')
    expect(customers[4].lastName).toBe('Zuel')

    customers.sort((a, b) => b.email.localeCompare(a.email)) //this sorts the data stored in the customers variable by the email address
    console.log(await customers)   //this shows the same data ordered in the Test Results window below
    //assertions that the data has been ordered(sorted)
    expect(customers[0].email).toBe('zebest@new.com')
    expect(customers[0].firstName).toBe('Alphie')
    expect(customers[0].lastName).toBe('Thomas')
    expect(customers[1].email).toBe('reallyreal@real.com')
    expect(customers[1].firstName).toBe('Danny')
    expect(customers[1].lastName).toBe('Real')
    expect(customers[2].email).toBe('jdoe@fake.com')
    expect(customers[2].firstName).toBe('John')
    expect(customers[2].lastName).toBe('Doe')
    expect(customers[3].email).toBe('jadoe@fake.com')
    expect(customers[3].firstName).toBe('Jane')
    expect(customers[3].lastName).toBe('Doe')
    expect(customers[4].email).toBe('admin@sports.ca.com')
    expect(customers[4].firstName).toBe('Brooke')
    expect(customers[4].lastName).toBe('Zuel')
  });


