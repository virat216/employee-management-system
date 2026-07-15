package com.virat.employeemanagementsystem.repository;

import com.virat.employeemanagementsystem.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface EmployeeRepository
        extends JpaRepository<Employee, Long>,
        JpaSpecificationExecutor<Employee> {

    boolean existsByDepartmentId(Long departmentId);

    boolean existsByRoleId(Long roleId);

}