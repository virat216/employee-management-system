package com.virat.employeemanagementsystem.dto.response;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecentEmployeeResponseDTO {

    private Long id;

    private String fullName;

    private String department;

    private LocalDate hireDate;

}