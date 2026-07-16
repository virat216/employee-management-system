export interface UserRequest {

    username: string;

    password: string;

    enabled: boolean;

    employeeId: number;

    securityRole: "ADMIN" | "HR" | "EMPLOYEE";

}