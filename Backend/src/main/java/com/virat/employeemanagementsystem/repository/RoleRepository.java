package com.virat.employeemanagementsystem.repository;

import com.virat.employeemanagementsystem.entity.Role;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoleRepository extends JpaRepository<Role, Long> {

    boolean existsByNameIgnoreCase(String name);

    Page<Role> findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(
            String name,
            String description,
            Pageable pageable
    );

    List<Role> findByActiveTrue();

    long countByActiveTrue();

    long countByActiveFalse();

}