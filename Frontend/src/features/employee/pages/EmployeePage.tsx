import { useMemo, useState } from "react";

import MainLayout from "../../../layouts/MainLayout";
import PageHeader from "../../../components/common/PageHeader";
import Button from "../../../components/common/Button";
import SearchBar from "../../../components/common/SearchBar";
import ConfirmDialog from "../../../components/common/ConfirmDialog";
import Pagination from "../../../components/common/Pagination";
import SortDropdown from "../../../components/common/SortDropdown";
import ToolbarButton from "../../../components/common/ToolbarButton";
import EmptyState from "../../../components/common/EmptyState";
import EmployeeFilterDialog from "../components/EmployeeFilterDialog";

import type { EmployeeFilter } from "../types/employeeFilter";

import EmployeeTable from "../components/EmployeeTable";
import EmployeeDialog from "../components/EmployeeDialog";

import { useEmployeesQuery } from "../hooks/useEmployeesQuery";
import { useRoleLookupQuery, } from "../../role/hooks/useRoleLookupQuery";
import { useDepartmentLookupQuery } from "../../department/hooks/useDepartmentLookupQuery";
import { useDeleteEmployee } from "../hooks/useDeleteEmployee";

import type { Employee } from "../types/employee";
import type { EmployeeFormData } from "../types/employeeForm";
import { Filter } from "lucide-react";





const emptyEmployee: EmployeeFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    salary: "",
    hireDate: "",
    departmentId: 0,
    roleId: 0,
};

function EmployeePage() {

const [open, setOpen] = useState(false);

const [selectedEmployee, setSelectedEmployee] =
    useState<Employee | null>(null);

const [formData, setFormData] =
    useState<EmployeeFormData>(emptyEmployee);

const [page, setPage] = useState(0);

const pageSize = 30;

const [sortBy, setSortBy] = useState("id");

const [direction, setDirection] =
    useState<"asc" | "desc">("asc");

const [searchTerm, setSearchTerm] = useState("");

const [filterDialogOpen, setFilterDialogOpen] =
    useState(false);

const [filter, setFilter] =
    useState<EmployeeFilter>({});

    const [deleteDialogOpen, setDeleteDialogOpen] =
        useState(false);

    const [employeeToDelete, setEmployeeToDelete] =
        useState<Employee | null>(null);

    const {
    data,
    isLoading,
} = useEmployeesQuery({

    page,

    size: pageSize,

    sortBy,

    direction,

    departmentId: filter.departmentId,

    roleId: filter.roleId,

});

const { data: departmentResponse } = useDepartmentLookupQuery();
const { data: roleResponse } = useRoleLookupQuery();

const departments = departmentResponse ?? [];
const roles = roleResponse ?? [];

const employees = useMemo(
    () => data?.content ?? [],
    [data]
);

const totalPages = data?.totalPages ?? 0;

    const filteredEmployees = useMemo(() => {

    const search = searchTerm.trim().toLowerCase();

    if (!search) {
        return employees;
    }

    return employees.filter((employee) => {

        const fullName =
            `${employee.firstName} ${employee.lastName}`.toLowerCase();

        return (

            employee.id.toString().includes(search) ||

            fullName.includes(search) ||

            employee.email.toLowerCase().includes(search) ||

            employee.department.name
                .toLowerCase()
                .includes(search) ||

            employee.role.name
                .toLowerCase()
                .includes(search)

        );

    });

}, [employees, searchTerm]);

    const deleteEmployeeMutation = useDeleteEmployee();

    function handleCreate() {

        setSelectedEmployee(null);

        setFormData(emptyEmployee);

        setOpen(true);

    }

    function handleEdit(employee: Employee) {

        setSelectedEmployee(employee);

        setFormData({
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            phone: employee.phone,
            salary: employee.salary.toString(),
            hireDate: employee.hireDate,
            departmentId: employee.department.id,
            roleId: employee.role.id,
        });

        setOpen(true);

    }

    function handleDelete(employee: Employee) {

        setEmployeeToDelete(employee);

        setDeleteDialogOpen(true);

    }

    function handleSort(

    column: string,

    direction: "asc" | "desc"

) {

    setSortBy(column);

    setDirection(direction);

    setPage(0);

}

    function handleConfirmDelete() {

        if (!employeeToDelete) return;

        deleteEmployeeMutation.mutate(employeeToDelete.id, {

            onSuccess: () => {

                setDeleteDialogOpen(false);

                setEmployeeToDelete(null);

            },

        });

    }

    function handleCloseDeleteDialog() {

        if (deleteEmployeeMutation.isPending) return;

        setDeleteDialogOpen(false);

        setEmployeeToDelete(null);

    }

    function handleClose() {

        setOpen(false);

        setSelectedEmployee(null);

        setFormData(emptyEmployee);

    }

    const sortOptions = [

    {
        label: "ID",
        value: "id",
    },

    {
        label: "Name",
        value: "firstName",
    },

    {
        label: "Department",
        value: "department.name",
    },

    {
        label: "Role",
        value: "role.name",
    },

    {
        label: "Salary",
        value: "salary",
    },

];

    return (

        <MainLayout>

            <PageHeader
                title="Employees"
                subtitle="Manage all employees."
                action={
                    <Button
                        text="+ Add Employee"
                        onClick={handleCreate}
                    />
                }
            />

           <div className="mb-6 flex justify-end gap-4">

    <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search employees..."
    />

    <SortDropdown

        options={sortOptions}

        sortBy={sortBy}

        direction={direction}

        onChange={handleSort}

    />
    <ToolbarButton
    icon={<Filter size={18} />}
    text="Filter"
    onClick={() => setFilterDialogOpen(true)}
/>

</div>

            {!isLoading && filteredEmployees.length === 0 ? (
    <EmptyState title="No employees found" />
) : (
    <EmployeeTable
        employees={filteredEmployees}
        loading={isLoading}
        onEdit={handleEdit}
        onDelete={handleDelete}
    />
)}

            <Pagination
    currentPage={page}
    totalPages={totalPages}
    onPageChange={setPage}
/>


            <EmployeeDialog
                open={open}
                onClose={handleClose}
                employee={selectedEmployee}
                formData={formData}
                setFormData={setFormData}
            />

            <EmployeeFilterDialog
    open={filterDialogOpen}
    filter={filter}
    departments={departments}
    roles={roles}
    onApply={(newFilter) => {
        setFilter(newFilter);
        setPage(0);
    }}
    onClose={() => setFilterDialogOpen(false)}
/>

            <ConfirmDialog
                isOpen={deleteDialogOpen}
                title="Delete Employee"
                message={
                    employeeToDelete
                        ? `Are you sure you want to delete ${employeeToDelete.firstName} ${employeeToDelete.lastName}? This action cannot be undone.`
                        : ""
                }
                confirmText="Delete"
                cancelText="Cancel"
                confirmButtonClassName="bg-red-600 hover:bg-red-700"
                isLoading={deleteEmployeeMutation.isPending}
                onConfirm={handleConfirmDelete}
                onCancel={handleCloseDeleteDialog}
            />

        </MainLayout>

    );

}

export default EmployeePage;