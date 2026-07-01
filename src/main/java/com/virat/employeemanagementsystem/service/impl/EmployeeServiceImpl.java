package com.virat.employeemanagementsystem.service.impl;

import com.virat.employeemanagementsystem.dto.request.EmployeeRequestDTO;
import com.virat.employeemanagementsystem.dto.response.EmployeeResponseDTO;
import com.virat.employeemanagementsystem.entity.Employee;
import com.virat.employeemanagementsystem.entity.Role;
import com.virat.employeemanagementsystem.exception.InactiveRoleException;
import com.virat.employeemanagementsystem.exception.RoleNotFoundException;
import com.virat.employeemanagementsystem.mapper.EmployeeMapper;
import com.virat.employeemanagementsystem.repository.DepartmentRepository;
import com.virat.employeemanagementsystem.repository.EmployeeRepository;
import com.virat.employeemanagementsystem.repository.RoleRepository;
import com.virat.employeemanagementsystem.service.EmployeeService;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.virat.employeemanagementsystem.entity.Department;
import com.virat.employeemanagementsystem.exception.DepartmentNotFoundException;
import com.virat.employeemanagementsystem.exception.EmployeeNotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    private final DepartmentRepository departmentRepository;

    private final EmployeeMapper employeeMapper;

    private final RoleRepository roleRepository;

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
    public List<EmployeeResponseDTO> getAllEmployees() {

        List<Employee> employees = employeeRepository.findAll();

        return employeeMapper.toResponseDTOList(employees);
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

        employeeRepository.delete(employee);
    }

    private Employee findEmployeeById(Long id) {

        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException(id));
    }

    private Department findDepartmentById(Long id) {

        return departmentRepository.findById(id)
                .orElseThrow(() -> new DepartmentNotFoundException(id));
    }

    private Role findActiveRoleById(Long id) {
        Role role = roleRepository.findById(id)
                .orElseThrow(() -> new RoleNotFoundException(id));

        if (!role.isActive()) {
            throw new InactiveRoleException(role.getId());
        }

        return role;
    }

}