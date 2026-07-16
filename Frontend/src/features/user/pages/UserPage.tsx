import { useState } from "react";

import MainLayout from "../../../layouts/MainLayout";
import PageHeader from "../../../components/common/PageHeader";
import Button from "../../../components/common/Button";
import SearchBar from "../../../components/common/SearchBar";
import SortDropdown from "../../../components/common/SortDropdown";
import Pagination from "../../../components/common/Pagination";
import ConfirmDialog from "../../../components/common/ConfirmDialog";
import EmptyState from "../../../components/common/EmptyState";

import UserTable from "../components/UserTable";
import UserDialog from "../components/UserDialog";

import { useUsersQuery } from "../hooks/useUsersQuery";
import { useDeleteUser } from "../hooks/useDeleteUser";

import type { User } from "../types/user";
import type { UserFormData } from "../types/userForm";

const emptyUser: UserFormData = {

    username: "",

    password: "",

    enabled: true,

    employeeId: 0,

    securityRole: "EMPLOYEE",

};

function UserPage() {

    const [open, setOpen] = useState(false);

    const [selectedUser, setSelectedUser] =
        useState<User | null>(null);

    const [formData, setFormData] =
        useState<UserFormData>(emptyUser);

    const [page, setPage] = useState(0);

    const pageSize = 30;

    const [sortBy, setSortBy] = useState("id");

    const [direction, setDirection] =
        useState<"asc" | "desc">("asc");

    const [search, setSearch] = useState("");

    const [deleteDialogOpen, setDeleteDialogOpen] =
        useState(false);

    const [userToDeactivate, setUserToDeactivate] =
        useState<User | null>(null);

    const {

        data,

        isLoading,

    } = useUsersQuery({

        page,

        size: pageSize,

        sortBy,

        direction,

        search,

    });

    const deleteUserMutation =
        useDeleteUser();

    const users =
        data?.content ?? [];

    const totalPages =
        data?.totalPages ?? 0;

    function handleCreate() {

        setSelectedUser(null);

        setFormData(emptyUser);

        setOpen(true);

    }

    function handleEdit(user: User) {

        setSelectedUser(user);

        setFormData({

            username: user.username,

            password: "",

            enabled: user.enabled,

            employeeId: user.employee.id,

            securityRole: user.securityRole,

        });

        setOpen(true);

    }

    function handleDeactivate(user: User) {

        setUserToDeactivate(user);

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

        setSelectedUser(null);

        setFormData(emptyUser);

        setOpen(false);

    }

    function handleConfirmDeactivate() {

        if (!userToDeactivate) return;

        deleteUserMutation.mutate(

            userToDeactivate.id,

            {

                onSuccess: () => {

                    setDeleteDialogOpen(false);

                    setUserToDeactivate(null);

                },

            }

        );

    }

    function handleCloseDeleteDialog() {

        if (deleteUserMutation.isPending) {

            return;

        }

        setDeleteDialogOpen(false);

        setUserToDeactivate(null);

    }

    const sortOptions = [

        {

            label: "ID",

            value: "id",

        },

        {

            label: "Username",

            value: "username",

        },

        {

            label: "Status",

            value: "enabled",

        },

    ];

    return (

        <MainLayout>

            <PageHeader

                title="Users"

                subtitle="Manage system users."

                action={

                    <Button

                        text="+ Add User"

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

                    placeholder="Search users..."

                />

                <SortDropdown

                    options={sortOptions}

                    sortBy={sortBy}

                    direction={direction}

                    onChange={handleSort}

                />

            </div>

            {!isLoading && users.length === 0 ? (

                <EmptyState title="No users found" />

            ) : (

                <UserTable

                    users={users}

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

            <UserDialog

                open={open}

                onClose={handleClose}

                user={selectedUser}

                formData={formData}

                setFormData={setFormData}

            />

            <ConfirmDialog

                isOpen={deleteDialogOpen}

                title="Disable User"

                message={

                    userToDeactivate

                        ? `Are you sure you want to disable "${userToDeactivate.username}"?`

                        : ""

                }

                confirmText="Disable"

                cancelText="Cancel"

                confirmButtonClassName="bg-red-600 hover:bg-red-700"

                isLoading={deleteUserMutation.isPending}

                onConfirm={handleConfirmDeactivate}

                onCancel={handleCloseDeleteDialog}

            />

        </MainLayout>

    );

}

export default UserPage;