import { useMemo } from "react"
import { Outlet, useNavigate } from "react-router"

import { AuthContext } from "@/hooks/useAuth"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { loginUser } from "@/services/auth"
import { LoginCredentials, User } from "@/types"

export const AuthProvider = () => {
    const [user, setUser] = useLocalStorage<User | null>("user", null)
    const [token, setToken] = useLocalStorage<string | null>("token", null)
    const navigate = useNavigate()

    const value = useMemo(() => {
        const login = async (credentials: LoginCredentials) => {
            const loginResult = await loginUser(credentials)
            if (loginResult.token && loginResult.user) {
                setUser(loginResult.user)
                setToken(loginResult.token)
            }

            navigate("/")
        }

        const logout = () => {
            setUser(null)
            setToken(null)
            navigate("/", { replace: true })
        }

        return { user, token, login, logout }
    }, [user, token, navigate, setUser, setToken])
    return (
        <AuthContext.Provider value={value}>
            <Outlet />
        </AuthContext.Provider>
    )
}
