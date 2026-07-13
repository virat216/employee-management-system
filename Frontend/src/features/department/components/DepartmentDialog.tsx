import Dialog from "../../../components/ui/Dialog";

import DepartmentForm from "./DepartmentForm";

import { useCreateDepartment } from "../hooks/useCreateDepartment";
import { useUpdateDepartment } from "../hooks/useUpdateDepartment";

import type { Department } from "../types/department";
import type { DepartmentRequest } from "../types/departmentRequest";

interface DepartmentDialogProps {

    open: boolean;

    onClose: () => void;

    department: Department | null;

    formData: DepartmentRequest;

    setFormData: React.Dispatch<
        React.SetStateAction<DepartmentRequest>
    >;

}

function DepartmentDialog({

    open,

    onClose,

    department,

    formData,

    setFormData,

}: DepartmentDialogProps) {

    const createMutation = useCreateDepartment();

    const updateMutation = useUpdateDepartment();

    const isEdit = department !== null;

    async function handleSave() {

        const payload = {

            name: formData.name,

            location: formData.location,

        };

        try {

            if (isEdit && department) {

                await updateMutation.mutateAsync({

                    id: department.id,

                    department: payload,

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
                    ? "Edit Department"
                    : "Add Department"
            }

            onClose={onClose}

        >

            <DepartmentForm

                department={formData}

                setDepartment={setFormData}

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

export default DepartmentDialog;