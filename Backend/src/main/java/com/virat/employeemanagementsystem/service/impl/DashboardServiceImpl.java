package com.virat.employeemanagementsystem.service.impl;

import com.virat.employeemanagementsystem.dto.response.DashboardSummaryResponseDTO;
import com.virat.employeemanagementsystem.dto.response.RecentEmployeeResponseDTO;
import com.virat.employeemanagementsystem.repository.DepartmentRepository;
import com.virat.employeemanagementsystem.repository.EmployeeRepository;
import com.virat.employeemanagementsystem.repository.RoleRepository;
import com.virat.employeemanagementsystem.repository.UserRepository;
import com.virat.employeemanagementsystem.service.DashboardService;
import com.virat.employeemanagementsystem.dto.response.ChartDataResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
                .activeEmployees(employeeRepository.count())
                .inactiveEmployees(0)

                .departments(departmentRepository.count())
                .activeDepartments(departmentRepository.count())
                .inactiveDepartments(0)

                .roles(roleRepository.count())
                .activeRoles(roleRepository.countByActiveTrue())
                .inactiveRoles(roleRepository.countByActiveFalse())

                .users(userRepository.count())
                .enabledUsers(userRepository.countByEnabledTrue())
                .disabledUsers(userRepository.countByEnabledFalse())

                .build();
    }

    @Override
    public List<RecentEmployeeResponseDTO> getRecentEmployees() {

        return employeeRepository
                .findTop5ByOrderByHireDateDesc()
                .stream()
                .map(employee -> RecentEmployeeResponseDTO.builder()
                        .id(employee.getId())
                        .fullName(employee.getFirstName() + " " + employee.getLastName())
                        .department(employee.getDepartment().getName())
                        .hireDate(employee.getHireDate())
                        .build())
                .toList();

    }

    @Override
    public List<ChartDataResponseDTO> getEmployeesByDepartment() {

        return employeeRepository.countEmployeesByDepartment();

    }

    @Override
    public List<ChartDataResponseDTO> getEmployeesByRole() {

        return employeeRepository.countEmployeesByRole();

    }
}