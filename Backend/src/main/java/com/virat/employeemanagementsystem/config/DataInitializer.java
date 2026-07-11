package com.virat.employeemanagementsystem.config;

import com.virat.employeemanagementsystem.entity.Role;
import com.virat.employeemanagementsystem.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner
{
    private final RoleRepository roleRepository;

    @Override
    public void run(String... args)
    {
        createRoleIfNotExists(
                "ADMIN",
                "System Administrator"
        );

        createRoleIfNotExists(
                "HR",
                "Human Resources"
        );

        createRoleIfNotExists(
                "EMPLOYEE",
                "Regular Employee"
        );
    }

    private void createRoleIfNotExists(
            String name,
            String description)
    {

        if (roleRepository.existsByName(name))
        {
            return;
        }

        Role role = Role.builder()
                .name(name)
                .description(description)
                .active(true)
                .build();

        roleRepository.save(role);
    }
}