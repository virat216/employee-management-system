import Dialog from "../../../components/ui/Dialog";

import RoleForm from "./RoleForm";

import { useCreateRole } from "../hooks/useCreateRole";
import { useUpdateRole } from "../hooks/useUpdateRole";

import type { Role } from "../types/role";
import type { RoleFormData } from "../types/roleForm";

interface RoleDialogProps {

    open: boolean;

    onClose: () => void;

    role: Role | null;

    formData: RoleFormData;

    setFormData: React.Dispatch<
        React.SetStateAction<RoleFormData>
    >;

}

function RoleDialog({

    open,

    onClose,

    role,

    formData,

    setFormData,

}: RoleDialogProps) {

    const createMutation = useCreateRole();

    const updateMutation = useUpdateRole();

    const isEdit = role !== null;

    async function handleSave() {

        const payload = {

            name: formData.name,

            description: formData.description,

            active: formData.active,

        };

        try {

            if (isEdit && role) {

                await updateMutation.mutateAsync({

                    id: role.id,

                    role: payload,

                });

            } else {

                await createMutation.mutateAsync(payload);

            }

            onClose();

        } catch (error) {

            console.error(error);

        }

    }

    return (

        <Dialog

            open={open}

            title={
                isEdit
                    ? "Edit Role"
                    : "Add Role"
            }

            onClose={onClose}

        >

            <RoleForm

                role={formData}

                setRole={setFormData}

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

export default RoleDialog;