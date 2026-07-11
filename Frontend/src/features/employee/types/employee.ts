export interface DepartmentSummary {

    id: number;

    name: string;

}

export interface RoleSummary {

    id: number;

    name: string;

}

export interface Employee {

    id: number;

    firstName: string;

    lastName: string;

    email: string;

    phone: string;

    salary: number;

    hireDate: string;

    department: DepartmentSummary;

    role: RoleSummary;

}