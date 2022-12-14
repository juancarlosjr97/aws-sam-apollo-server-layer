const fetch = require("node-fetch");

// This is to make queries to a server running locally
const dns = require("node:dns");
dns.setDefaultResultOrder("ipv4first");

describe("E2E test for the Apollo GraphQL Server running on a Lambda with a Layer", () => {
  it("Querying the Apollo GraphQL Server", async () => {
    const queryData = {
      query: `#graphql
      query TimeStamp {
        timestamp
      }`,
      variables: {},
    };

    const response = await fetch("http://localhost:3000/graphql", {
      method: "post",
      body: JSON.stringify(queryData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    expect(data).toMatchObject({
      data: { timestamp: expect.any(String) },
    });
  });
});
