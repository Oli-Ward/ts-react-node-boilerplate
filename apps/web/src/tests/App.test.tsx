import { render, screen } from "@testing-library/react"
import App from "@/components/Home"

describe("Homepage Rendering", () => {
    it("should render the main heading", () => {
        render(<App />)

        const heading = screen.getByText(/Hello World/i)
        expect(heading).toBeInTheDocument()
    })
})
