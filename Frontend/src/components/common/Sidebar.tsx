import {
    LayoutDashboard,
    Users,
    Building2,
    Shield,
    UserCog,
    LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {

    return (

        <aside className="w-64 bg-slate-900 text-white h-screen">

            <div className="text-2xl font-bold p-6 border-b border-slate-700">

                EMS

            </div>

            <nav className="mt-6">

                <NavLink
    to="/dashboard"
    className="block"
>
    <SidebarItem
        icon={<LayoutDashboard size={20} />}
        text="Dashboard"
    />
</NavLink>

                <NavLink
    to="/employees"
    className="block"
>
    <SidebarItem
        icon={<Users size={20} />}
        text="Employees"
    />
</NavLink>

                <NavLink
    to="/departments"
    className="block"
>
    <SidebarItem
        icon={<Building2 size={20} />}
        text="Departments"
    />
</NavLink>

               <NavLink
    to="/roles"
    className="block"
>
    <SidebarItem
        icon={<Shield size={20} />}
        text="Roles"
    />
</NavLink>

<NavLink
    to="/users"
    className="block"
>
    <SidebarItem
        icon={<UserCog size={20} />}
        text="Users"
    />
</NavLink>

                <SidebarItem icon={<LogOut size={20} />} text="Logout" />

            </nav>

        </aside>

    );
}

interface SidebarItemProps {

    icon: React.ReactNode;

    text: string;
}

function SidebarItem({

    icon,

    text,

}: SidebarItemProps) {

    return (

        <button
            className="
            flex
            items-center
            gap-3
            w-full
            px-6
            py-4
            hover:bg-slate-800
            transition
            "
        >

            {icon}

            <span>{text}</span>

        </button>

    );

}

export default Sidebar;