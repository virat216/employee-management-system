package com.virat.employeemanagementsystem.dto.response;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeeResponseDTO {

    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String phone;

    private BigDecimal salary;

    private LocalDate hireDate;

    private DepartmentSummaryDTO department;
}