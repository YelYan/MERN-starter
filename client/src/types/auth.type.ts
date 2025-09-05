export interface AuthResponse {
    user: {
        id: string;
        email: string;
        name: string;
    };
    token: string;
}
export interface LoginFormData {
    email: string;
    password: string;
}
export interface RegisterFormData {
    name: string;
    email: string;
    password: string;
}