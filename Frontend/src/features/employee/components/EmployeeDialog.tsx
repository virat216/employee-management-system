import Dialog from "../../../components/ui/Dialog";

import EmployeeForm from "./EmployeeForm";

import { useCreateEmployee } from "../hooks/useCreateEmployee";
import { useUpdateEmployee } from "../hooks/useUpdateEmployee";

import type { Employee } from "../types/employee";
import type { EmployeeFormData } from "../types/employeeForm";

interface EmployeeDialogProps {

    open: boolean;

    onClose: () => void;

    employee: Employee | null;

    formData: EmployeeFormData;

    setFormData: React.Dispatch<
        React.SetStateAction<EmployeeFormData>
    >;

}

function EmployeeDialog({

    open,

    onClose,

    employee,

    formData,

    setFormData,

}: EmployeeDialogProps) {

    const createMutation = useCreateEmployee();

    const updateMutation = useUpdateEmployee();

    const isEdit = employee !== null;

    async function handleSave() {

        console.log("formData =", formData);

        const payload = {

            firstName: formData.firstName,

            lastName: formData.lastName,

            email: formData.email,

            phone: formData.phone,

            salary: Number(formData.salary),

            hireDate: formData.hireDate,

            departmentId: formData.departmentId,

            roleId: formData.roleId,

        };

        console.log("payload.salary =", payload.salary);

        try {

            if (isEdit && employee) {

                await updateMutation.mutateAsync({

                    id: employee.id,

                    employee: payload,

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
                    ? "Edit Employee"
                    : "Add Employee"
            }

            onClose={onClose}

        >

            <EmployeeForm

                employee={formData}

                setEmployee={setFormData}

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

export default EmployeeDialog;