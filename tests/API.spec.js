
import { test, expect } from '@playwright/test';

// get request
test('API-Get', async ({ request }) => {
    // Get response
    const response = await request.get('https://reqres.in/api/users/2')
    //Verify get response status
    expect(response.status()).toBe(200);
    // Verify text 
    const GetRequestText = await response.text();
    expect(GetRequestText).toContain('Janet');

});

// Post request
test('API-POST', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Sobika",
            "job": "Tester"
        }
    })
    //Verify get response status
    expect(response.status()).toBe(201);
    // Verify text 
    const GetRequestText = await response.text();
    expect(GetRequestText).toContain('Sobika');

});
// put request
test('API-PUT', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Sobika",
            "job": "QA"
        }
    })
    //Verify get response status
    expect(response.status()).toBe(200);
    // Verify text 
    const GetRequestJob = await response.text();
    expect(GetRequestJob).toContain('QA');
    console.log(await response.json)

})
// delete request
test('API-DELETE', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2')
    //Verify get response status
    expect(response.status()).toBe(204);
    
})