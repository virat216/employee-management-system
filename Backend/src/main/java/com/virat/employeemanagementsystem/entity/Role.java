package com.virat.employeemanagementsystem.entity;

import com.virat.employeemanagementsystem.entity.base.BaseEntity;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "roles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Role extends BaseEntity {

    @Column(
            nullable = false,
            unique = true,
            length = 50
    )
    private String name;

    @Column(length = 255)
    private String description;

    @Column(nullable = false)
    private boolean active = true;

}