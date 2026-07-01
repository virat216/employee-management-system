package com.virat.employeemanagementsystem.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeeRequestDTO {

    @NotBlank(message = "First name is required.")
    @Size(max = 50, message = "First name cannot exceed 50 characters.")
    private String firstName;

    @NotBlank(message = "Last name is required.")
    @Size(max = 50, message = "Last name cannot exceed 50 characters.")
    private String lastName;

    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email format.")
    private String email;

    @NotBlank(message = "Phone number is required.")
    @Size(max = 15, message = "Phone number cannot exceed 15 characters.")
    private String phone;

    @NotNull(message = "Salary is required.")
    @DecimalMin(value = "0.0", inclusive = false,
            message = "Salary must be greater than zero.")
    private BigDecimal salary;

    @NotNull(message = "Hire date is required.")
    private LocalDate hireDate;

    @NotNull(message = "Department ID is required.")
    private Long departmentId;
}