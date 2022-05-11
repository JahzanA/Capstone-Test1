import { server } from "../server.js";
import supertest from "supertest";
const requestWithSupertest = supertest(server);

describe("Teacher Endpoints", () => {
  it("GET /listTeachers should show all teachers", async () => {
    const res = await requestWithSupertest.get("/listTeachers");
    expect(res.status).toEqual(200);
    let body = res.body;
    expect(body.length).toEqual(3);
    body.forEach(element => {
        expect(element).toHaveProperty('age');
        expect(element).toHaveProperty('name');
        expect(element).toHaveProperty('id');
    });
  });
});