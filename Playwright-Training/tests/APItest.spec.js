import { test, expect } from "@playwright/test";
/**
 * Base URl
 * end point : 
 * Authentication process
 * Authencation: Authorization
 * Header
 * 
 * Request object
 * 
 */
// let token;
// test.beforeAll("Authenticate the API", async ({ request }) => {
//   const authencated = await response.post("https://Authenticate.com");
//   const body = await authencated.json();
//   token = body.token;
// });
test("Get the Product List", async ({ request }) => {
  const response = await request.get(
    "https://automationexercise.com/api/productsList",
    {
      headers: {
        authenation: "bearer " + token,
      },
    }
  );
  console.log(await response.json());
  expect(response.status() == 200).toBeTruthy();
});

test.only("Get all Jira Project", async ({ request }) => {
 const response = await request.get(
    "https://anirudhadonge-12122025.atlassian.net/rest/api/3/space",
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `anirudha.donge@gmail.com:5ec67022ae79a10c16b45d62
ATATT3xFfGF05XSX8_E2wrpxh4jXsU51mi9IJwlFYw4KuYkCF9sE5wCVBPSycPhRgWqHMqj0Vqi_dYasSDhROnrc4O3NUfnmnn64YJTQNjMePleswhc9-U7ATJ2587SJhRqqfu7I9b-9WPJtaGfspgkol8u3CBCU2pItc1gSNKNTi6jZuTofwvQ=10109256`
        ).toString("base64")}`,
        Accept: "application/json",
      },
    }
  );
 console.log(await response.json());
 expect(response.status() == 200).toBeTruthy();
});

let body = {
  "key": "TEST",
  "name": "Test Project",
  "projectTypeKey": "software",
  "projectTemplateKey": "com.pyxis.greenhopper.jira:gh-scrum-template",
  "leadAccountId": "5ec67022ae79a10c16b45d62"
}
test("create a new project",async({request})=>{
     const response = await request.post(
    "https://anirudhadonge-29112025.atlassian.net/rest/api/3/project",
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `anirudha.donge@gmail.com:5ec67022ae79a10c16b45d62
ATATT3xFfGF05XSX8_E2wrpxh4jXsU51mi9IJwlFYw4KuYkCF9sE5wCVBPSycPhRgWqHMqj0Vqi_dYasSDhROnrc4O3NUfnmnn64YJTQNjMePleswhc9-U7ATJ2587SJhRqqfu7I9b-9WPJtaGfspgkol8u3CBCU2pItc1gSNKNTi6jZuTofwvQ=10109256`
        ).toString("base64")}`,
        Accept: "application/json",
      },
      body: body
    }
  );
   expect(response.status() == 200).toBeTruthy();
  //console.log(await response.json());
})



  const payload = {
    fields: {
      project: { key: 'SCRUM' },
      summary: "The Quest to Automate Story Creation",
      description:
        "A developer embarks on a journey to automate Jira workflows.\n" +
        "Their mission: create stories with a single API call.\n" +
        "Along the way, they battle authentication dragons and JSON goblins —\n" +
        "until finally, the Jira API reveals its secrets.",
      issuetype: { name: "Task" } // Make sure "Story" exists in your Jira project
    }
  };

  test("create a new Issue",async({request})=>{
     const response = await request.post(
    "https://anirudhadonge-29112025.atlassian.net/rest/api/3/issue'",
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `anirudha.donge@gmail.com:5ec67022ae79a10c16b45d62
ATATT3xFfGF05XSX8_E2wrpxh4jXsU51mi9IJwlFYw4KuYkCF9sE5wCVBPSycPhRgWqHMqj0Vqi_dYasSDhROnrc4O3NUfnmnn64YJTQNjMePleswhc9-U7ATJ2587SJhRqqfu7I9b-9WPJtaGfspgkol8u3CBCU2pItc1gSNKNTi6jZuTofwvQ=10109256`
        ).toString("base64")}`,
        Accept: "application/json",
      },
      body: payload
    }
  );
  //console.log(await response.json());
})