const request = require("supertest");
const express = require("express");

const app = express();
app.get("/orders", (req, res) => res.json([{ id: 1, item: "Widget" }]));

describe("Order Service", () => {
  it("GET /orders should return orders", async () => {
    const res = await request(app).get("/orders");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty("item");
  });
});
