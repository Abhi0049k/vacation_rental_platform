import { ReactNode } from "react";

export interface childrenPropI {
    children: ReactNode
}

export interface LoginCredentialsI {
    email: string;
    password: string;
}

export enum Role {
    guest = "guest",
    host = "host"
}

export interface RoleI {
    role: Role
}

export interface hostRegisterCredentialsI {
    name: string;
    email: string;
    password: string;
    about: string;
}