import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import InputField from "../../../components/ui/InputField";

import { login as loginUser } from "../services/authService";

import { useAuth } from "../../../auth/useAuth";

function LoginPage() {

    const [username, setUsername] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [showPassword, setShowPassword] =
        useState(false);

    const navigate = useNavigate();

    const { login } = useAuth();

    async function handleLogin() {

        try {

            const response =
                await loginUser(
                    username,
                    password
                );

            console.log("========== LOGIN RESPONSE ==========");
            console.log(response);
            console.log("response.data =", response.data);
            console.log("response.data.token =", response.data?.token);

            const token =
                response.data.token;

            await login(token);

            navigate(
                "/dashboard",
                {
                    replace: true,
                }
            );

        } catch (error) {

            console.error("LOGIN ERROR");
            console.error(error);

        }

    }

    return (

        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-100 to-blue-100">

            <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

                <div className="mb-8 text-center">

                    <h1 className="text-4xl font-bold text-blue-600">
                        EMS
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Employee Management System
                    </p>

                </div>

                <InputField
                    label="Username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />

                <div className="relative">

                    <InputField
                        label="Password"
                        type={
                            showPassword
                                ? "text"
                                : "password"
                        }
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button
                        type="button"
                        className="absolute right-4 top-11"
                        onClick={() =>
                            setShowPassword(
                                !showPassword
                            )
                        }
                    >
                        {
                            showPassword
                                ? <EyeOff size={20} />
                                : <Eye size={20} />
                        }
                    </button>

                </div>

                <button
                    onClick={handleLogin}
                    className="mt-2 w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
                >
                    Login
                </button>

            </div>

        </div>

    );

}

export default LoginPage;