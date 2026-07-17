import { UserCircle2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../auth/useAuth";

function Navbar() {

    const {
        currentUser,
    } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    const pageTitles: Record<string, string> = {
        "/dashboard": "Dashboard",
        "/employees": "Employees",
        "/departments": "Departments",
        "/roles": "Roles",
        "/users": "Users",
        "/profile": "My Profile",
    };

    const pageTitle =
        pageTitles[location.pathname] ??
        "Employee Management System";

    return (

        <header
            className="
                h-16
                bg-white
                shadow
                flex
                justify-between
                items-center
                px-8
            "
        >

            <h1 className="text-2xl font-bold text-slate-800">

                {pageTitle}

            </h1>

            <div className="flex items-center gap-4">

                <div className="text-right">

                    <p className="font-semibold text-slate-800">

                        {currentUser
                            ? `Welcome, ${currentUser.firstName} ${currentUser.lastName}`
                            : "Welcome"}

                    </p>

                    <p className="text-sm text-slate-500">

                        {currentUser?.securityRole ?? ""}

                    </p>

                </div>

                <button
                    onClick={() => navigate("/profile")}
                    className="
                        rounded-full
                        p-1
                        text-slate-500
                        hover:text-blue-600
                        hover:bg-slate-100
                        transition-all
                        duration-200
                        cursor-pointer
                    "
                    title="My Profile"
                >
                    <UserCircle2 size={42} />
                </button>

            </div>

        </header>

    );

}

export default Navbar;