package com.virat.employeemanagementsystem.repository;

import com.virat.employeemanagementsystem.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

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

    boolean existsByUsername(String username);

    boolean existsByEmployeeId(Long employeeId);

}