package com.virat.employeemanagementsystem.repository;

import com.virat.employeemanagementsystem.dto.response.ChartDataResponseDTO;
import com.virat.employeemanagementsystem.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository
        extends JpaRepository<Employee, Long>,
        JpaSpecificationExecutor<Employee> {

    boolean existsByDepartmentId(Long departmentId);

    boolean existsByRoleId(Long roleId);

    List<Employee> findTop5ByOrderByHireDateDesc();

    @Query("""
SELECT new com.virat.employeemanagementsystem.dto.response.ChartDataResponseDTO(
d.name,
COUNT(e)
)
FROM Employee e
JOIN e.department d
GROUP BY d.name
ORDER BY COUNT(e) DESC
""")
    List<ChartDataResponseDTO> countEmployeesByDepartment();

    @Query("""
SELECT new com.virat.employeemanagementsystem.dto.response.ChartDataResponseDTO(
r.name,
COUNT(e)
)
FROM Employee e
JOIN e.role r
GROUP BY r.name
ORDER BY COUNT(e) DESC
""")
    List<ChartDataResponseDTO> countEmployeesByRole();

}