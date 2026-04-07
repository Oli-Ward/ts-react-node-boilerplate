import { render, screen } from "@testing-library/react"
import App from "../components/App"

describe("Homepage Rendering", () => {
    it("should render the main heading", () => {
        render(<App />)

        // Replace 'Vite + React' with text actually present on your homepage
        const heading = screen.getByText(/Hello World/i)
        expect(heading).toBeInTheDocument()
    })
})
