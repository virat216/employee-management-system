package com.virat.employeemanagementsystem.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DashboardSummaryResponseDTO {

    private long employees;

    private long activeEmployees;

    private long inactiveEmployees;

    private long departments;

    private long activeDepartments;

    private long inactiveDepartments;

    private long roles;

    private long activeRoles;

    private long inactiveRoles;

    private long users;

    private long enabledUsers;

    private long disabledUsers;

}