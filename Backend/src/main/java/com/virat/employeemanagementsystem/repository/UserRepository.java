package com.virat.employeemanagementsystem.repository;

import com.virat.employeemanagementsystem.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.virat.employeemanagementsystem.entity.Employee;
import java.util.List;

import java.util.Optional;

public interface UserRepository
        extends JpaRepository<User, Long> {

    @Query("""
        SELECT u
        FROM User u
        JOIN FETCH u.employee e
        JOIN FETCH e.role
        WHERE u.username = :username
        """)
    Optional<User> findByUsername(String username);

    Optional<User> findByEmployeeId(Long employeeId);

    boolean existsByUsernameIgnoreCase(String username);

    boolean existsByEmployeeId(Long employeeId);

    @Query("""
        SELECT u
        FROM User u
        JOIN u.employee e
        WHERE
            LOWER(u.username) LIKE LOWER(CONCAT('%', :search, '%'))
            OR
            LOWER(e.firstName) LIKE LOWER(CONCAT('%', :search, '%'))
            OR
            LOWER(e.lastName) LIKE LOWER(CONCAT('%', :search, '%'))
        """)
    Page<User> searchUsers(
            String search,
            Pageable pageable
    );

    @Query("""
    SELECT e
    FROM Employee e
    WHERE e.id NOT IN (
        SELECT u.employee.id
        FROM User u
    )
    ORDER BY e.firstName
    """)
    List<Employee> findAvailableEmployees();
}