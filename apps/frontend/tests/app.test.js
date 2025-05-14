const request = require("supertest");
const express = require("express");
const routes = require("../src/routes");

const app = express();
app.use("/", routes);

describe("Frontend Routes", () => {
  it("GET / should return welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("Hello from Frontend");
  });
});
