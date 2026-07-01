package com.virat.employeemanagementsystem.repository;

import com.virat.employeemanagementsystem.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository
        extends JpaRepository<Role, Long> {

    boolean existsByName(String name);

}