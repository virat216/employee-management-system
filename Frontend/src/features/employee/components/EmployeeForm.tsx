import InputField from "../../../components/ui/InputField";

import { useDepartmentsQuery } from "../../department/hooks/useDepartmentsQuery";
import { useRolesQuery } from "../../role/hooks/useRolesQuery";

import type { EmployeeFormData } from "../types/employeeForm";

interface EmployeeFormProps {
    employee: EmployeeFormData;

    setEmployee: React.Dispatch<
        React.SetStateAction<EmployeeFormData>
    >;
}

function EmployeeForm({
    employee,
    setEmployee,
}: EmployeeFormProps) {

    const {
        data: departments = [],
        isLoading: departmentsLoading,
    } = useDepartmentsQuery();

    const {
        data: roles = [],
        isLoading: rolesLoading,
    } = useRolesQuery();

    return (
        <form
            className="grid grid-cols-2 gap-5"
            autoComplete="off"
        >

            <InputField
                label="First Name"
                type="text"
                placeholder="Enter first name"
                value={employee.firstName}
                onChange={(e) =>
                    setEmployee((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                    }))
                }
            />

            <InputField
                label="Last Name"
                type="text"
                placeholder="Enter last name"
                value={employee.lastName}
                onChange={(e) =>
                    setEmployee((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                    }))
                }
            />

            <InputField
                label="Email"
                type="email"
                placeholder="Enter email"
                value={employee.email}
                onChange={(e) =>
                    setEmployee((prev) => ({
                        ...prev,
                        email: e.target.value,
                    }))
                }
            />

            <InputField
                label="Phone"
                type="text"
                placeholder="Enter phone number"
                value={employee.phone}
                onChange={(e) =>
                    setEmployee((prev) => ({
                        ...prev,
                        phone: e.target.value,
                    }))
                }
            />

            <InputField
                label="Salary"
                type="number"
                placeholder="Enter salary"
                value={employee.salary}
                onChange={(e) =>
                    setEmployee((prev) => ({
                        ...prev,
                        salary: e.target.value,
                    }))
                }
            />

            <InputField
                label="Hire Date"
                type="date"
                placeholder=""
                value={employee.hireDate}
                onChange={(e) =>
                    setEmployee((prev) => ({
                        ...prev,
                        hireDate: e.target.value,
                    }))
                }
            />

            <div>

                <label className="mb-2 block font-medium">

                    Department

                </label>

                <select
                    value={employee.departmentId}
                    disabled={departmentsLoading}
                    onChange={(e) =>
                        setEmployee((prev) => ({
                            ...prev,
                            departmentId: Number(e.target.value),
                        }))
                    }
                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-4
                        py-3
                        shadow-sm
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-200
                        outline-none
                        disabled:bg-gray-100
                    "
                >

                    <option value={0}>

                        {departmentsLoading
                            ? "Loading..."
                            : "Select Department"}

                    </option>

                    {departments.map((department) => (

                        <option
                            key={department.id}
                            value={department.id}
                        >

                            {department.name}

                        </option>

                    ))}

                </select>

            </div>

            <div>

                <label className="mb-2 block font-medium">

                    Role

                </label>

                <select
                    value={employee.roleId}
                    disabled={rolesLoading}
                    onChange={(e) =>
                        setEmployee((prev) => ({
                            ...prev,
                            roleId: Number(e.target.value),
                        }))
                    }
                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-4
                        py-3
                        shadow-sm
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-200
                        outline-none
                        disabled:bg-gray-100
                    "
                >

                    <option value={0}>

                        {rolesLoading
                            ? "Loading..."
                            : "Select Role"}

                    </option>

                    {roles.map((role) => (

                        <option
                            key={role.id}
                            value={role.id}
                        >

                            {role.name}

                        </option>

                    ))}

                </select>

            </div>

        </form>
    );
}

export default EmployeeForm;