import { useContext } from "react";
import { logout } from "../api/authAPI";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const useLogout = () => {
    const navigator = useNavigate();
    const authContext = useContext(AuthContext);

    return async () => {
        try {
            await logout();
            authContext.changeAuthState({});
            navigator('/');
        } catch (error) {
            console.error(error)
        }
    }
}