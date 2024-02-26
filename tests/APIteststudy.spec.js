const { test, expect } = require("@playwright/test")

test ('agetAPIstudy', async ({ request })=>{
    const userDetails = await request.get('https://reqres.in/api/users?page=2');
    console.log((await userDetails.json));
    expect (userDetails.status()).toBe(200);
    // expect (userDetails.text()).toContain("12");
});

test('aputAPIstudy', async({request})=>{
    const creatUser = await request.post('https://reqres.in/api/users', 
            {data:{"name": "morpheus",
                    "job": "leader"}});
    let responce = ((await creatUser.json));
    console.log(responce);
    //expect (responce).toContain('morpheus');
    expect (creatUser.status()).toBe(201);
})