package com.virat.employeemanagementsystem.service.impl;

import com.virat.employeemanagementsystem.dto.response.DashboardSummaryResponseDTO;
import com.virat.employeemanagementsystem.repository.DepartmentRepository;
import com.virat.employeemanagementsystem.repository.EmployeeRepository;
import com.virat.employeemanagementsystem.repository.RoleRepository;
import com.virat.employeemanagementsystem.repository.UserRepository;
import com.virat.employeemanagementsystem.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {

    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    @Override
    public DashboardSummaryResponseDTO getDashboardSummary() {

        return DashboardSummaryResponseDTO.builder()
                .employees(employeeRepository.count())
                .departments(departmentRepository.count())
                .roles(roleRepository.count())
                .users(userRepository.count())
                .build();
    }
}