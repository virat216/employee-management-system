package com.virat.employeemanagementsystem.service.impl;

import com.virat.employeemanagementsystem.common.response.PageResponse;
import com.virat.employeemanagementsystem.dto.request.EmployeeFilterRequestDTO;
import com.virat.employeemanagementsystem.dto.request.EmployeeRequestDTO;
import com.virat.employeemanagementsystem.dto.response.EmployeeResponseDTO;
import com.virat.employeemanagementsystem.entity.Department;
import com.virat.employeemanagementsystem.entity.Employee;
import com.virat.employeemanagementsystem.entity.Role;
import com.virat.employeemanagementsystem.exception.DepartmentNotFoundException;
import com.virat.employeemanagementsystem.exception.EmployeeDeletionException;
import com.virat.employeemanagementsystem.exception.EmployeeNotFoundException;
import com.virat.employeemanagementsystem.exception.InactiveRoleException;
import com.virat.employeemanagementsystem.exception.RoleNotFoundException;
import com.virat.employeemanagementsystem.mapper.EmployeeMapper;
import com.virat.employeemanagementsystem.repository.DepartmentRepository;
import com.virat.employeemanagementsystem.repository.EmployeeRepository;
import com.virat.employeemanagementsystem.repository.RoleRepository;
import com.virat.employeemanagementsystem.repository.UserRepository;
import com.virat.employeemanagementsystem.service.EmployeeService;
import com.virat.employeemanagementsystem.specification.EmployeeSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    private final DepartmentRepository departmentRepository;

    private final EmployeeMapper employeeMapper;

    private final RoleRepository roleRepository;

    private final UserRepository userRepository;

    @Transactional
    @Override
    public EmployeeResponseDTO saveEmployee(EmployeeRequestDTO requestDTO) {

        Department department = findDepartmentById(
                requestDTO.getDepartmentId()
        );

        Role role = findActiveRoleById(
                requestDTO.getRoleId()
        );

        Employee employee = employeeMapper.toEntity(requestDTO);

        employee.setDepartment(department);
        employee.setRole(role);

        Employee savedEmployee = employeeRepository.save(employee);

        return employeeMapper.toResponseDTO(savedEmployee);
    }

    @Override
    public EmployeeResponseDTO getEmployeeById(Long id) {

        Employee employee = findEmployeeById(id);

        return employeeMapper.toResponseDTO(employee);
    }

    @Override
    public PageResponse<EmployeeResponseDTO> getAllEmployees(
            Pageable pageable,
            EmployeeFilterRequestDTO filterRequestDTO) {

        Specification<Employee> specification =
                EmployeeSpecification.hasDepartment(filterRequestDTO.getDepartmentId());

        specification = specification.and(
                EmployeeSpecification.hasRole(filterRequestDTO.getRoleId())
        );

        specification = specification
                .and(EmployeeSpecification.hasDepartment(
                        filterRequestDTO.getDepartmentId()
                ))
                .and(EmployeeSpecification.hasRole(
                        filterRequestDTO.getRoleId()
                ));

        Page<Employee> employeePage =
                employeeRepository.findAll(specification, pageable);

        return PageResponse.<EmployeeResponseDTO>builder()
                .content(
                        employeeMapper.toResponseDTOList(
                                employeePage.getContent()
                        )
                )
                .page(employeePage.getNumber())
                .size(employeePage.getSize())
                .totalElements(employeePage.getTotalElements())
                .totalPages(employeePage.getTotalPages())
                .first(employeePage.isFirst())
                .last(employeePage.isLast())
                .build();
    }

    @Transactional
    @Override
    public EmployeeResponseDTO updateEmployee(
            Long id,
            EmployeeRequestDTO requestDTO) {

        Employee employee = findEmployeeById(id);

        Department department = findDepartmentById(
                requestDTO.getDepartmentId()
        );

        Role role = findActiveRoleById(
                requestDTO.getRoleId()
        );

        employeeMapper.updateEntity(
                requestDTO,
                employee
        );

        employee.setDepartment(department);
        employee.setRole(role);

        Employee updatedEmployee = employeeRepository.save(employee);

        return employeeMapper.toResponseDTO(updatedEmployee);
    }

    @Transactional
    @Override
    public void deleteEmployee(Long id) {

        Employee employee = findEmployeeById(id);

        if (userRepository.existsByEmployeeId(id)) {
            throw new EmployeeDeletionException(
                    "Cannot delete employee because a user account is associated with it."
            );
        }

        employeeRepository.delete(employee);
    }

    private Employee findEmployeeById(Long id) {

        return employeeRepository.findById(id)
                .orElseThrow(() ->
                        new EmployeeNotFoundException(
                                "Employee not found with id: " + id
                        ));
    }

    private Department findDepartmentById(Long id) {

        return departmentRepository.findById(id)
                .orElseThrow(() ->
                        new DepartmentNotFoundException(
                                "Department not found with id: " + id
                        ));
    }

    private Role findActiveRoleById(Long id) {

        Role role = roleRepository.findById(id)
                .orElseThrow(() ->
                        new RoleNotFoundException(
                                "Role not found with id: " + id
                        ));

        if (!role.isActive()) {
            throw new InactiveRoleException(role.getId());
        }

        return role;
    }
}