export interface User {

    id: number;

    username: string;

    enabled: boolean;

    employee: {

        id: number;

        firstName: string;

        lastName: string;

    };

    securityRole: "ADMIN" | "HR" | "EMPLOYEE";

}