import { post } from "@/lib/api"
import { LoginCredentials, AuthResponse } from "@/types"

export const loginUser = (loginCredentials: LoginCredentials): Promise<AuthResponse> => {
    return post<AuthResponse>('login', loginCredentials)
}