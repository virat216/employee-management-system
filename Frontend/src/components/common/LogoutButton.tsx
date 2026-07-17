import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

import { useAuth } from "../../auth/useAuth";
import ConfirmDialog from "./ConfirmDialog";

import { useState } from "react";

function LogoutButton() {

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const { logout } = useAuth();

    const [open, setOpen] = useState(false);

    function handleLogout() {

        logout();

        queryClient.clear();

        toast.success("Logged out successfully.");

        navigate("/", {

            replace: true,

        });

    }

    return (

        <>

            <button

                onClick={() => setOpen(true)}

                className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-lg
                    px-4
                    py-3
                    text-left
                    transition
                    hover:bg-red-50
                    hover:text-red-600
                "

            >

                <LogOut size={20} />

                Logout

            </button>

            <ConfirmDialog

                isOpen={open}

                title="Logout"

                message="Are you sure you want to logout?"

                confirmText="Logout"

                cancelText="Cancel"

                confirmButtonClassName="bg-red-600 hover:bg-red-700"

                onConfirm={handleLogout}

                onCancel={() => setOpen(false)}

            />

        </>

    );

}

export default LogoutButton;