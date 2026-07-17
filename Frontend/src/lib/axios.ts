import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {

    console.log("========== AXIOS INTERCEPTOR ==========");

    console.log("Request URL =", config.url);

    const token = localStorage.getItem("token");

    console.log("Token from localStorage =", token);

    const isLoginRequest =
        config.url === "/auth/login";

    console.log("Is Login Request =", isLoginRequest);

    if (token && !isLoginRequest) {

        config.headers.Authorization =
            `Bearer ${token}`;

        console.log(
            "Authorization Header Added"
        );

    } else {

        console.log(
            "Authorization Header NOT Added"
        );

    }

    return config;

});

export default api;