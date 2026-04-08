import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hooks/useAuth"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { login } = useAuth()
    return (
        <section className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="mb-6 text-2xl font-semibold text-gray-900">
                    Login
                </h1>
                <div>
                    <form
                        className="space-y-4"
                        onSubmit={() => login({ email, password })}
                    >
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(p) => setPassword(p.target.value)}
                        />
                        <Button className="w-full" type="submit">
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
