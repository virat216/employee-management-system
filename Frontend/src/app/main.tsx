import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../auth/AuthContext";

import "../styles/index.css";

import App from "./App";
import QueryProvider from "./providers/QueryProvider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
    <QueryProvider>

    <AuthProvider>

        <App />

        <Toaster
            position="top-right"
            toastOptions={{
                duration: 3000,
                style: {
                    borderRadius: "8px",
                    background: "#ffffff",
                    color: "#1f2937",
                },
                success: {
                    iconTheme: {
                        primary: "#22c55e",
                        secondary: "#ffffff",
                    },
                },
                error: {
                    iconTheme: {
                        primary: "#ef4444",
                        secondary: "#ffffff",
                    },
                },
            }}
        />

    </AuthProvider>

</QueryProvider>   
    </StrictMode>
);