const request = require("supertest");
const { createApp } = require("../src/utils/create_app");
app = createApp();
describe("GET /ping", () => {
    it("should return pong", async () => {
        const res = await request(app).get("/ping");
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: "pong" });
    });
});
