import InputField from "../../../components/ui/InputField";

import type { DepartmentRequest } from "../types/departmentRequest";

interface DepartmentFormProps {

    department: DepartmentRequest;

    setDepartment: React.Dispatch<
        React.SetStateAction<DepartmentRequest>
    >;

}

function DepartmentForm({

    department,

    setDepartment,

}: DepartmentFormProps) {

    return (

        <form
            className="grid grid-cols-2 gap-5"
            autoComplete="off"
        >

            <InputField
                label="Department Name"
                type="text"
                placeholder="Enter department name"
                value={department.name}
                onChange={(e) =>
                    setDepartment((prev) => ({
                        ...prev,
                        name: e.target.value,
                    }))
                }
            />

            <InputField
                label="Location"
                type="text"
                placeholder="Enter location"
                value={department.location}
                onChange={(e) =>
                    setDepartment((prev) => ({
                        ...prev,
                        location: e.target.value,
                    }))
                }
            />

        </form>

    );

}

export default DepartmentForm;