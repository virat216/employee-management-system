package com.virat.employeemanagementsystem.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserRequestDTO {

    @NotBlank(message = "Username is required.")
    private String username;

    @NotBlank(message = "Password is required.")
    private String password;

    @NotNull(message = "Enabled status is required.")
    private Boolean enabled;

    @NotNull(message = "Employee ID is required.")
    private Long employeeId;
}