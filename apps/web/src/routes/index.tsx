import { createBrowserRouter } from "react-router"

import { Home } from "@/components/Home"
import { Login } from "@/components/Login"
import { ProtectedRoute } from "@/components/ProtectedRoute"
import { AuthProvider } from "@/context/AuthProvider"

export const router = createBrowserRouter([
    {
        Component: AuthProvider,
        children: [
            {
                Component: ProtectedRoute,
                children: [{ path: "/", Component: Home }],
            },
            { path: "/login", Component: Login },
        ],
    },
])
