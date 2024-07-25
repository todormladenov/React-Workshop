import { createContext } from "react";

export const AuthContext = createContext({
    email: '',
    accessToken: '',
    isAuth: false,
    userId: '',
    setAuthState: () => null,
})