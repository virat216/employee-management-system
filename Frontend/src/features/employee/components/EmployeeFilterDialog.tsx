import { useEffect, useState } from "react";

import Dialog from "../../../components/ui/Dialog";
import Button from "../../../components/common/Button";

import type { Department } from "../../department/types/department";
import type { Role } from "../../role/types/role";
import type { EmployeeFilter } from "../types/employeeFilter";

interface EmployeeFilterDialogProps {
    open: boolean;
    filter: EmployeeFilter;
    departments: Department[];
    roles: Role[];
    onApply: (filter: EmployeeFilter) => void;
    onClose: () => void;
}

function EmployeeFilterDialog({
    open,
    filter,
    departments,
    roles,
    onApply,
    onClose,
}: EmployeeFilterDialogProps) {
    const [localFilter, setLocalFilter] =
        useState<EmployeeFilter>(filter);

    useEffect(() => {
        setLocalFilter(filter);
    }, [filter]);

    function handleDepartmentChange(
        event: React.ChangeEvent<HTMLSelectElement>
    ) {
        setLocalFilter((previous) => ({
            ...previous,
            departmentId: event.target.value
                ? Number(event.target.value)
                : undefined,
        }));
    }

    function handleRoleChange(
        event: React.ChangeEvent<HTMLSelectElement>
    ) {
        setLocalFilter((previous) => ({
            ...previous,
            roleId: event.target.value
                ? Number(event.target.value)
                : undefined,
        }));
    }

    function handleClear() {
        const cleared: EmployeeFilter = {};

        setLocalFilter(cleared);

        onApply(cleared);

        onClose();
    }

    function handleApply() {
        onApply(localFilter);

        onClose();
    }

    return (
        <Dialog
            open={open}
            title="Filter Employees"
            onClose={onClose}
        >
            <div className="space-y-6">

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Department
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
                        value={localFilter.departmentId ?? ""}
                        onChange={handleDepartmentChange}
                    >
                        <option value="">
                            All Departments
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
                    <label className="mb-2 block text-sm font-medium">
                        Role
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
                        value={localFilter.roleId ?? ""}
                        onChange={handleRoleChange}
                    >
                        <option value="">
                            All Roles
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

                <div className="flex justify-end gap-3 pt-2">

                    <Button
                        text="Clear"
                        variant="secondary"
                        onClick={handleClear}
                    />

                    <Button
                        text="Cancel"
                        variant="secondary"
                        onClick={onClose}
                    />

                    <Button
                        text="Apply"
                        onClick={handleApply}
                    />

                </div>

            </div>
        </Dialog>
    );
}

export default EmployeeFilterDialog;