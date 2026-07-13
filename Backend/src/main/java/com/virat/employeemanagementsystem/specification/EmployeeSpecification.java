package com.virat.employeemanagementsystem.specification;

import com.virat.employeemanagementsystem.entity.Employee;
import org.springframework.data.jpa.domain.Specification;

public final class EmployeeSpecification {

    private EmployeeSpecification() {
    }

    public static Specification<Employee> hasDepartment(Long departmentId) {
        return (root, query, criteriaBuilder) ->
                departmentId == null
                        ? null
                        : criteriaBuilder.equal(
                        root.get("department").get("id"),
                        departmentId
                );
    }

    public static Specification<Employee> hasRole(Long roleId) {
        return (root, query, criteriaBuilder) ->
                roleId == null
                        ? null
                        : criteriaBuilder.equal(
                        root.get("role").get("id"),
                        roleId
                );
    }
}