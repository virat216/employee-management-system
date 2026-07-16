package com.virat.employeemanagementsystem.dto.response;

import com.virat.employeemanagementsystem.security.role.SecurityRole;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserResponseDTO {

    private Long id;

    private String username;

    private boolean enabled;

    private EmployeeSummaryDTO employee;

    private SecurityRole securityRole;

}