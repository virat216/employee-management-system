import Dialog from "../../../components/ui/Dialog";

import UserForm from "./UserForm";

import { useCreateUser } from "../hooks/useCreateUser";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { useEmployeeLookupQuery } from "../hooks/useEmployeeLookupQuery";

import type { User } from "../types/user";
import type { UserFormData } from "../types/userForm";

interface UserDialogProps {

    open: boolean;

    onClose: () => void;

    user: User | null;

    formData: UserFormData;

    setFormData: React.Dispatch<
        React.SetStateAction<UserFormData>
    >;

}

function UserDialog({

    open,

    onClose,

    user,

    formData,

    setFormData,

}: UserDialogProps) {

    const createMutation =
        useCreateUser();

    const updateMutation =
        useUpdateUser();

    const {

        data: employees = [],

    } = useEmployeeLookupQuery();

    const isEdit =
        user !== null;

    async function handleSave() {

        const payload = {

            username: formData.username,

            password: formData.password,

            enabled: formData.enabled,

            employeeId: formData.employeeId,

            securityRole: formData.securityRole,

        };

        try {

            if (isEdit && user) {

                await updateMutation.mutateAsync({

                    id: user.id,

                    user: payload,

                });

            } else {

                await createMutation.mutateAsync(
                    payload
                );

            }

            onClose();

        }

        catch (error) {

            console.error(error);

        }

    }

    return (

        <Dialog

            open={open}

            title={
                isEdit
                    ? "Edit User"
                    : "Add User"
            }

            onClose={onClose}

        >

            <UserForm

                user={formData}

                setUser={setFormData}

                employees={employees}

            />

            <div className="mt-8 flex justify-end gap-3">

                <button

                    onClick={onClose}

                    className="
                        rounded-lg
                        border
                        px-5
                        py-2
                    "

                >

                    Cancel

                </button>

                <button

                    onClick={handleSave}

                    disabled={
                        createMutation.isPending ||
                        updateMutation.isPending
                    }

                    className="
                        rounded-lg
                        bg-blue-600
                        px-5
                        py-2
                        text-white
                        hover:bg-blue-700
                        disabled:cursor-not-allowed
                        disabled:bg-gray-400
                    "

                >

                    {createMutation.isPending ||
                    updateMutation.isPending

                        ? "Saving..."

                        : isEdit

                            ? "Update"

                            : "Save"}

                </button>

            </div>

        </Dialog>

    );

}

export default UserDialog;