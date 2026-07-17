import {
    Mail,
    Phone,
    Building2,
    Briefcase,
    Calendar,
    Shield,
    User,
    UserRound,
    LogOut,
    Pencil,
    KeyRound,
} from "lucide-react";

import type { Profile } from "../types/profile";

interface ProfileCardProps {
    profile: Profile;
    onLogout: () => void;
}

export default function ProfileCard({
    profile,
    onLogout,
}: ProfileCardProps) {

    const formattedHireDate = new Date(profile.hireDate).toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }
    );

    const initials =
        `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`;

    return (

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

            {/* ================= Header ================= */}

            <div className="flex flex-col items-center">

                <div
                    className="
                        w-24
                        h-24
                        rounded-full
                        bg-blue-600
                        text-white
                        flex
                        items-center
                        justify-center
                        text-3xl
                        font-bold
                        shadow-lg
                    "
                >
                    {initials}
                </div>

                <h2 className="mt-5 text-3xl font-bold text-slate-900">

                    {profile.firstName} {profile.lastName}

                </h2>

                <p className="mt-1 text-lg text-gray-600">

                    {profile.role}

                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-3">

                    <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">

                        {profile.securityRole}

                    </span>

                    <span
                        className={`
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            px-4
                            py-1
                            text-sm
                            font-semibold
                            ${
                                profile.enabled
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                            }
                        `}
                    >

                        <span
                            className={`
                                w-2
                                h-2
                                rounded-full
                                ${
                                    profile.enabled
                                        ? "bg-green-600"
                                        : "bg-red-600"
                                }
                            `}
                        />

                        {profile.enabled ? "Active" : "Inactive"}

                    </span>

                </div>

            </div>

            {/* ================= Personal Information ================= */}

            <section className="mt-10 border rounded-xl p-6">

                <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">

                    <UserRound size={20} />

                    Personal Information

                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <InfoItem
                        icon={<User size={18} />}
                        label="Username"
                        value={profile.username}
                    />

                    <InfoItem
                        icon={<Mail size={18} />}
                        label="Email"
                        value={profile.email}
                    />

                    <InfoItem
                        icon={<Phone size={18} />}
                        label="Phone"
                        value={profile.phone}
                    />

                </div>

            </section>

            {/* ================= Employment Information ================= */}

            <section className="mt-6 border rounded-xl p-6">

                <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">

                    <Briefcase size={20} />

                    Employment Information

                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <InfoItem
                        icon={<Building2 size={18} />}
                        label="Department"
                        value={profile.department}
                    />

                    <InfoItem
                        icon={<Briefcase size={18} />}
                        label="Role"
                        value={profile.role}
                    />

                    <InfoItem
                        icon={<Calendar size={18} />}
                        label="Hire Date"
                        value={formattedHireDate}
                    />

                </div>

            </section>

            {/* ================= Account Information ================= */}

            <section className="mt-6 border rounded-xl p-6">

                <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">

                    <Shield size={20} />

                    Account Information

                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <InfoItem
                        icon={<Shield size={18} />}
                        label="Security Role"
                        value={profile.securityRole}
                    />

                    <InfoItem
                        icon={<User size={18} />}
                        label="Account Status"
                        value={profile.enabled ? "Active" : "Inactive"}
                    />

                </div>

            </section>

            {/* ================= Account Actions ================= */}

            {/* ================= Account Actions ================= */}

<section className="mt-6 border rounded-xl p-6">

    <h3 className="mb-6 text-lg font-semibold">

        Account Actions

    </h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div
            className="
                rounded-xl
                border
                border-gray-200
                p-5
                bg-gray-50
                flex
                flex-col
                justify-between
            "
        >

            <div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                        <Pencil
                            size={18}
                            className="text-blue-600"
                        />

                        <h4 className="font-semibold">

                            Edit Profile

                        </h4>

                    </div>

                    <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">

                        Coming Soon

                    </span>

                </div>

                <p className="mt-3 text-sm text-gray-500">

                    Update your personal information such as phone number and email address.

                </p>

            </div>

        </div>

        <div
            className="
                rounded-xl
                border
                border-gray-200
                p-5
                bg-gray-50
                flex
                flex-col
                justify-between
            "
        >

            <div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                        <KeyRound
                            size={18}
                            className="text-blue-600"
                        />

                        <h4 className="font-semibold">

                            Change Password

                        </h4>

                    </div>

                    <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">

                        Coming Soon

                    </span>

                </div>

                <p className="mt-3 text-sm text-gray-500">

                    Improve account security by updating your password.

                </p>

            </div>

        </div>

        <div
            className="
                rounded-xl
                border
                border-red-200
                p-5
                bg-red-50
                flex
                flex-col
                justify-between
            "
        >

            <div>

                <div className="flex items-center gap-2">

                    <LogOut
                        size={18}
                        className="text-red-600"
                    />

                    <h4 className="font-semibold text-red-700">

                        Logout

                    </h4>

                </div>

                <p className="mt-3 text-sm text-red-600">

                    Securely sign out from your account on this device.

                </p>

            </div>

            <button
                onClick={onLogout}
                className="
                    mt-5
                    rounded-lg
                    bg-red-600
                    py-2.5
                    text-white
                    font-medium
                    transition-colors
                    hover:bg-red-700
                "
            >

                Logout

            </button>

        </div>

    </div>

</section>

        </div>

    );

}

interface InfoItemProps {

    icon: React.ReactNode;

    label: string;

    value: string;

}

function InfoItem({
    icon,
    label,
    value,
}: InfoItemProps) {

    return (

        <div className="flex items-start gap-3">

            <div className="mt-1 text-blue-600">

                {icon}

            </div>

            <div>

                <p className="text-sm text-gray-500">

                    {label}

                </p>

                <p className="font-semibold text-slate-900">

                    {value}

                </p>

            </div>

        </div>

    );

}