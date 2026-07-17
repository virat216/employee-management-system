package com.virat.employeemanagementsystem.dto.response;

import com.virat.employeemanagementsystem.security.role.SecurityRole;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CurrentUserResponseDTO {

    private Long id;

    private String username;

    private String firstName;

    private String lastName;

    private String email;

    private SecurityRole securityRole;

}