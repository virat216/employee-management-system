package com.virat.employeemanagementsystem.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeFilterRequestDTO {

    private Long departmentId;

    private Long roleId;

}