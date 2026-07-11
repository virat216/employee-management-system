import { z } from "zod";

export const employeeSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1, "First name is required."),

    lastName: z
        .string()
        .trim()
        .min(1, "Last name is required."),

    email: z
        .string()
        .trim()
        .email("Invalid email address."),

    phone: z
        .string()
        .trim()
        .min(10, "Phone number must contain at least 10 digits."),

    salary: z
        .coerce
        .number()
        .positive("Salary must be greater than 0."),

    hireDate: z
        .string()
        .min(1, "Hire date is required."),

    departmentId: z
        .number()
        .min(1, "Please select a department."),

    roleId: z
        .number()
        .min(1, "Please select a role."),
});

export type EmployeeFormValues =
    z.infer<typeof employeeSchema>;