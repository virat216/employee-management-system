package com.virat.employeemanagementsystem.entity;

import com.virat.employeemanagementsystem.entity.base.BaseEntity;
import com.virat.employeemanagementsystem.security.role.SecurityRole;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class User extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private boolean enabled = true;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "employee_id",
            nullable = false,
            unique = true
    )
    private Employee employee;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SecurityRole securityRole;
}