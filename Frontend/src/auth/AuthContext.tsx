import {
    createContext,
    useEffect,
    useState,
} from "react";

import { getCurrentUser } from "../features/auth/services/authService";
import type { CurrentUser } from "../features/auth/types/currentUser";

interface AuthContextType {

    isAuthenticated: boolean;

    currentUser: CurrentUser | null;

    login: (token: string) => void;

    logout: () => void;

}

export const AuthContext =
    createContext<AuthContextType | null>(null);

interface AuthProviderProps {

    children: React.ReactNode;

}

export function AuthProvider({

    children,

}: AuthProviderProps) {

    const [isAuthenticated, setIsAuthenticated] =
        useState(false);

    const [currentUser, setCurrentUser] =
        useState<CurrentUser | null>(null);

    useEffect(() => {

        async function loadCurrentUser() {

            const token =
                localStorage.getItem("token");

            if (!token) {

                return;

            }

            try {

                setIsAuthenticated(true);

                const response =
                    await getCurrentUser();

                setCurrentUser(response.data);

            } catch {

                localStorage.clear();

                setCurrentUser(null);

                setIsAuthenticated(false);

            }

        }

        loadCurrentUser();

    }, []);

    async function login(token: string) {

    localStorage.setItem(
        "token",
        token
    );

    setIsAuthenticated(true);

    try {

        const response =
            await getCurrentUser();

        setCurrentUser(
            response.data
        );

    } catch (error) {

        console.error(error);

        logout();

    }

}

    function logout() {

        localStorage.clear();

        setCurrentUser(null);

        setIsAuthenticated(false);

    }

    return (

        <AuthContext.Provider

            value={{

                isAuthenticated,

                currentUser,

                login,

                logout,

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}