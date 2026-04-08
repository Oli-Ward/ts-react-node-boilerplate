import { createApp } from "src/app"
import request from "supertest"

describe("API", () => {
    describe("Health Check", () => {
        it("should return 200", async () => {
            const app = createApp()
            const response = await Promise.resolve(
                request(app).get("/api/v1/health")
            )
            expect(response.status).toBe(200)
            expect(response.body).toEqual({ message: "Hello World" })
        })
    })
})
