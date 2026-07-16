export interface UserFormData {

    username: string;

    password: string;

    enabled: boolean;

    employeeId: number;

    securityRole: "ADMIN" | "HR" | "EMPLOYEE";

}