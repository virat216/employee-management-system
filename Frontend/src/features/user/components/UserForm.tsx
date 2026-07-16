import InputField from "../../../components/ui/InputField";

import type { EmployeeSummary } from "../../employee/types/employeeSummary";
import type { UserFormData } from "../types/userForm";

interface UserFormProps {

    user: UserFormData;

    setUser: React.Dispatch<
        React.SetStateAction<UserFormData>
    >;

    employees: EmployeeSummary[];

}

function UserForm({

    user,

    setUser,

    employees,

}: UserFormProps) {

    return (

        <form
            className="grid grid-cols-2 gap-5"
            autoComplete="off"
        >

            <InputField
                label="Username"
                type="text"
                placeholder="Enter username"
                value={user.username}
                onChange={(e) =>
                    setUser((previous) => ({
                        ...previous,
                        username: e.target.value,
                    }))
                }
            />

            <InputField
                label="Password"
                type="password"
                placeholder="Enter password"
                value={user.password}
                onChange={(e) =>
                    setUser((previous) => ({
                        ...previous,
                        password: e.target.value,
                    }))
                }
            />

            <div>

                <label className="mb-2 block text-sm font-medium">
                    Employee
                </label>

                <select
                    className="
                        w-full
                        rounded-lg
                        border
                        border-gray-300
                        px-3
                        py-2
                        focus:border-blue-500
                        focus:outline-none
                    "
                    value={user.employeeId}
                    onChange={(e) =>
                        setUser((previous) => ({
                            ...previous,
                            employeeId: Number(e.target.value),
                        }))
                    }
                >

                    <option value={0}>
                        Select Employee
                    </option>

                    {employees.map((employee) => (

                        <option
                            key={employee.id}
                            value={employee.id}
                        >

                            {employee.firstName} {employee.lastName}

                        </option>

                    ))}

                </select>

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium">
                    Security Role
                </label>

                <select
                    className="
                        w-full
                        rounded-lg
                        border
                        border-gray-300
                        px-3
                        py-2
                        focus:border-blue-500
                        focus:outline-none
                    "
                    value={user.securityRole}
                    onChange={(e) =>
                        setUser((previous) => ({
                            ...previous,
                            securityRole: e.target.value as
                                | "ADMIN"
                                | "HR"
                                | "EMPLOYEE",
                        }))
                    }
                >

                    <option value="ADMIN">
                        ADMIN
                    </option>

                    <option value="HR">
                        HR
                    </option>

                    <option value="EMPLOYEE">
                        EMPLOYEE
                    </option>

                </select>

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium">
                    Status
                </label>

                <select
                    className="
                        w-full
                        rounded-lg
                        border
                        border-gray-300
                        px-3
                        py-2
                        focus:border-blue-500
                        focus:outline-none
                    "
                    value={user.enabled ? "true" : "false"}
                    onChange={(e) =>
                        setUser((previous) => ({
                            ...previous,
                            enabled: e.target.value === "true",
                        }))
                    }
                >

                    <option value="true">
                        Enabled
                    </option>

                    <option value="false">
                        Disabled
                    </option>

                </select>

            </div>

        </form>

    );

}

export default UserForm;