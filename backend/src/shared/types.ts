export interface HostRegisterI {
    name: string;
    email: string;
    password: string;
    about: string;
}

export interface LoginCredentialsI {
    email: string;
    password: string;
}