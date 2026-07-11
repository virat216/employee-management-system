package com.virat.employeemanagementsystem.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoginResponseDTO {

    private String token;

    private String tokenType;

    private Long userId;

    private Long employeeId;

    private String username;
}