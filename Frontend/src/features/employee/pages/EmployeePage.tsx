import { useState } from "react";

import MainLayout from "../../../layouts/MainLayout";
import PageHeader from "../../../components/common/PageHeader";
import Button from "../../../components/common/Button";

import EmployeeTable from "../components/EmployeeTable";
import EmployeeDialog from "../components/EmployeeDialog";

import { useEmployeesQuery } from "../hooks/useEmployeesQuery";

import type { Employee } from "../types/employee";
import type { EmployeeFormData } from "../types/employeeForm";

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

    const {

        data: employees = [],

        isLoading,

    } = useEmployeesQuery();

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

    function handleClose() {

        setOpen(false);

        setSelectedEmployee(null);

        setFormData(emptyEmployee);

    }

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

            <EmployeeTable

                employees={employees}

                loading={isLoading}

                onEdit={handleEdit}

            />

            <EmployeeDialog

                open={open}

                onClose={handleClose}

                employee={selectedEmployee}

                formData={formData}

                setFormData={setFormData}

            />

        </MainLayout>

    );

}

export default EmployeePage;