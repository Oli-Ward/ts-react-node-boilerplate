export type User = {
    id: number;
    email: string;
};

export type LoginCredentials = {
    email: string,
    password: string
}

export type AuthResponse = {
    user: User,
    token: string
}

