import { useState } from "react";

import MainLayout from "../../../layouts/MainLayout";
import PageHeader from "../../../components/common/PageHeader";
import Button from "../../../components/common/Button";
import SearchBar from "../../../components/common/SearchBar";
import SortDropdown from "../../../components/common/SortDropdown";
import Pagination from "../../../components/common/Pagination";
import ConfirmDialog from "../../../components/common/ConfirmDialog";
import EmptyState from "../../../components/common/EmptyState";

import RoleTable from "../components/RoleTable";
import RoleDialog from "../components/RoleDialog";

import { useRolesQuery } from "../hooks/useRolesQuery";
import { useDeleteRole } from "../hooks/useDeleteRole";

import type { Role } from "../types/role";
import type { RoleFormData } from "../types/roleForm";

const emptyRole: RoleFormData = {

    name: "",

    description: "",

    active: true,

};

function RolePage() {

    const [open, setOpen] = useState(false);

    const [selectedRole, setSelectedRole] =
        useState<Role | null>(null);

    const [formData, setFormData] =
        useState<RoleFormData>(emptyRole);

    const [page, setPage] = useState(0);

    const pageSize = 30;

    const [sortBy, setSortBy] = useState("id");

    const [direction, setDirection] =
        useState<"asc" | "desc">("asc");

    const [search, setSearch] = useState("");

    const [deleteDialogOpen, setDeleteDialogOpen] =
        useState(false);

    const [roleToDelete, setRoleToDelete] =
        useState<Role | null>(null);

    const {

        data,

        isLoading,

    } = useRolesQuery({

        page,

        size: pageSize,

        sortBy,

        direction,

        search,

    });

    const deleteRoleMutation =
        useDeleteRole();

    const roles =
        data?.content ?? [];

    const totalPages =
        data?.totalPages ?? 0;

    function handleCreate() {

        setSelectedRole(null);

        setFormData(emptyRole);

        setOpen(true);

    }

    function handleEdit(role: Role) {

        setSelectedRole(role);

        setFormData({

            name: role.name,

            description: role.description,

            active: role.active,

        });

        setOpen(true);

    }

    function handleDeactivate(role: Role) {

    setRoleToDelete(role);

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

        setSelectedRole(null);

        setFormData(emptyRole);

        setOpen(false);

    }

    function handleConfirmDelete() {

        if (!roleToDelete) return;

        deleteRoleMutation.mutate(
            roleToDelete.id,
            {

                onSuccess: () => {

                    setDeleteDialogOpen(false);

                    setRoleToDelete(null);

                },

            }
        );

    }

    function handleCloseDeleteDialog() {

        if (deleteRoleMutation.isPending) {

            return;

        }

        setDeleteDialogOpen(false);

        setRoleToDelete(null);

    }

    const sortOptions = [

        {

            label: "ID",

            value: "id",

        },

        {

            label: "Role",

            value: "name",

        },

        {

            label: "Description",

            value: "description",

        },

        {

            label: "Status",

            value: "active",

        },

    ];

    return (

        <MainLayout>

            <PageHeader

                title="Roles"

                subtitle="Manage all job roles."

                action={

                    <Button

                        text="+ Add Role"

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

                    placeholder="Search roles..."

                />

                <SortDropdown

                    options={sortOptions}

                    sortBy={sortBy}

                    direction={direction}

                    onChange={handleSort}

                />

            </div>

            {!isLoading && roles.length === 0 ? (

                <EmptyState title="No roles found" />

            ) : (

                <RoleTable

                    roles={roles}

                    loading={isLoading}

                    onEdit={handleEdit}

                    onDeactivate={handleDeactivate}

                />

            )}

            <Pagination

                currentPage={page}

                totalPages={totalPages}

                onPageChange={setPage}

            />

            <RoleDialog

                open={open}

                onClose={handleClose}

                role={selectedRole}

                formData={formData}

                setFormData={setFormData}

            />

            <ConfirmDialog

                isOpen={deleteDialogOpen}

                title="Deactivate Role"

                message={
    roleToDelete
        ? `Are you sure you want to deactivate "${roleToDelete.name}"? Employees will no longer be able to use this role.`
        : ""
}

                confirmText="Deactivate"

                cancelText="Cancel"

                confirmButtonClassName="bg-red-600 hover:bg-red-700"

                isLoading={deleteRoleMutation.isPending}

                onConfirm={handleConfirmDelete}

                onCancel={handleCloseDeleteDialog}

            />

        </MainLayout>

    );

}

export default RolePage;