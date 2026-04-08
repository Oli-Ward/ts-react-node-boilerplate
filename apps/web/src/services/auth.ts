import { post } from "@/lib/api"
import { AuthResponse, LoginCredentials } from "@/types"

export const loginUser = (
    loginCredentials: LoginCredentials
): Promise<AuthResponse> => {
    return post<AuthResponse>("login", loginCredentials)
}
