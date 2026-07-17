import { UserCircle2 } from "lucide-react";

import { useAuth } from "../../auth/useAuth";

function Navbar() {

    const {

        currentUser,

    } = useAuth();

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

                Dashboard

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

                <UserCircle2
                    size={42}
                    className="text-slate-500"
                />

            </div>

        </header>

    );

}

export default Navbar;