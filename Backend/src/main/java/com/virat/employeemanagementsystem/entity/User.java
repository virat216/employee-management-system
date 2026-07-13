package com.virat.employeemanagementsystem.entity;

import com.virat.employeemanagementsystem.security.role.SecurityRole;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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