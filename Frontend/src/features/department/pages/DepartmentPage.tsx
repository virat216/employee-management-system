import { useState } from "react";

import MainLayout from "../../../layouts/MainLayout";
import PageHeader from "../../../components/common/PageHeader";
import Button from "../../../components/common/Button";
import SearchBar from "../../../components/common/SearchBar";
import SortDropdown from "../../../components/common/SortDropdown";
import Pagination from "../../../components/common/Pagination";
import ConfirmDialog from "../../../components/common/ConfirmDialog";
import EmptyState from "../../../components/common/EmptyState";

import DepartmentTable from "../components/DepartmentTable";
import DepartmentDialog from "../components/DepartmentDialog";

import { useDepartmentsQuery } from "../hooks/useDepartmentsQuery";
import { useDeleteDepartment } from "../hooks/useDeleteDepartment";

import type { Department } from "../types/department";
import type { DepartmentRequest } from "../types/departmentRequest";

import ErrorState from "../../../components/common/ErrorState";

const emptyDepartment: DepartmentRequest = {

    name: "",

    location: "",

};

function DepartmentPage() {

    const [open, setOpen] = useState(false);

    const [selectedDepartment, setSelectedDepartment] =
        useState<Department | null>(null);

    const [formData, setFormData] =
        useState<DepartmentRequest>(emptyDepartment);

    const [page, setPage] = useState(0);

    const pageSize = 30;

    const [sortBy, setSortBy] = useState("id");

    const [direction, setDirection] =
        useState<"asc" | "desc">("asc");

    const [search, setSearch] = useState("");

    const [deleteDialogOpen, setDeleteDialogOpen] =
        useState(false);

    const [departmentToDelete, setDepartmentToDelete] =
        useState<Department | null>(null);

    const {

        data,

        isLoading,

        isError,

    } = useDepartmentsQuery({

        page,

        size: pageSize,

        sortBy,

        direction,

        search,

    });

    const deleteDepartmentMutation =
        useDeleteDepartment();

    const departments =
        data?.content ?? [];

    const totalPages =
        data?.totalPages ?? 0;

    function handleCreate() {

        setSelectedDepartment(null);

        setFormData(emptyDepartment);

        setOpen(true);

    }

    function handleEdit(department: Department) {

        setSelectedDepartment(department);

        setFormData({

            name: department.name,

            location: department.location,

        });

        setOpen(true);

    }

    function handleDelete(department: Department) {

        setDepartmentToDelete(department);

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

    function handleClose() {

        setSelectedDepartment(null);

        setFormData(emptyDepartment);

        setOpen(false);

    }

    function handleConfirmDelete() {

        if (!departmentToDelete) return;

        deleteDepartmentMutation.mutate(
            departmentToDelete.id,
            {

                onSuccess: () => {

                    setDeleteDialogOpen(false);

                    setDepartmentToDelete(null);

                },

            }
        );

    }

    function handleCloseDeleteDialog() {

        if (deleteDepartmentMutation.isPending) {

            return;

        }

        setDeleteDialogOpen(false);

        setDepartmentToDelete(null);

    }

    const sortOptions = [

        {

            label: "ID",

            value: "id",

        },

        {

            label: "Department",

            value: "name",

        },

        {

            label: "Location",

            value: "location",

        },

    ];

    if (isError) {

    return (

        <MainLayout>

            <PageHeader
                title="Departments"
                subtitle="Manage all departments."
            />

            <ErrorState
                title="Unable to load departments"
                message="Please try again later."
            />

        </MainLayout>

    );

}

    return (

        <MainLayout>

            <PageHeader

                title="Departments"

                subtitle="Manage all departments."

                action={

                    <Button

                        text="+ Add Department"

                        onClick={handleCreate}

                    />

                }

            />

            <div className="mb-6 flex justify-end gap-4">

                <SearchBar

                    value={search}

                    onChange={(value) => {

                        setSearch(value);

                        setPage(0);

                    }}

                    placeholder="Search departments..."

                />

                <SortDropdown

                    options={sortOptions}

                    sortBy={sortBy}

                    direction={direction}

                    onChange={handleSort}

                />

            </div>

            {!isLoading && departments.length === 0 ? (

                <EmptyState title="No departments found" />

            ) : (

                <DepartmentTable

                    departments={departments}

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

            <DepartmentDialog

                open={open}

                onClose={handleClose}

                department={selectedDepartment}

                formData={formData}

                setFormData={setFormData}

            />

            <ConfirmDialog

                isOpen={deleteDialogOpen}

                title="Delete Department"

                message={

                    departmentToDelete

                        ? `Are you sure you want to delete "${departmentToDelete.name}"?`

                        : ""

                }

                confirmText="Delete"

                cancelText="Cancel"

                confirmButtonClassName="bg-red-600 hover:bg-red-700"

                isLoading={deleteDepartmentMutation.isPending}

                onConfirm={handleConfirmDelete}

                onCancel={handleCloseDeleteDialog}

            />

        </MainLayout>

    );

}

export default DepartmentPage;