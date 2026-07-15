import InputField from "../../../components/ui/InputField";

import type { RoleFormData } from "../types/roleForm";

interface RoleFormProps {

    role: RoleFormData;

    setRole: React.Dispatch<
        React.SetStateAction<RoleFormData>
    >;

}

function RoleForm({

    role,

    setRole,

}: RoleFormProps) {

    return (

        <form
            className="grid grid-cols-2 gap-5"
            autoComplete="off"
        >

            <InputField
                label="Role Name"
                type="text"
                placeholder="Enter role name"
                value={role.name}
                onChange={(e) =>
                    setRole((prev) => ({
                        ...prev,
                        name: e.target.value,
                    }))
                }
            />

            <InputField
                label="Description"
                type="text"
                placeholder="Enter description"
                value={role.description}
                onChange={(e) =>
                    setRole((prev) => ({
                        ...prev,
                        description: e.target.value,
                    }))
                }
            />

            <div className="col-span-2">

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        checked={role.active}
                        onChange={(e) =>
                            setRole((prev) => ({
                                ...prev,
                                active: e.target.checked,
                            }))
                        }
                        className="h-4 w-4"
                    />

                    <span className="font-medium">

                        Active

                    </span>

                </label>

            </div>

        </form>

    );

}

export default RoleForm;