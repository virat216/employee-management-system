package com.virat.employeemanagementsystem.dto.response;

import com.virat.employeemanagementsystem.security.role.SecurityRole;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProfileResponseDTO {

    private Long id;

    private String username;

    private String firstName;

    private String lastName;

    private String email;

    private String phone;

    private String department;

    private String role;

    private LocalDate hireDate;

    private SecurityRole securityRole;

    private boolean enabled;

}