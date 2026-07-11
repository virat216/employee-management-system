package com.virat.employeemanagementsystem.repository;

import com.virat.employeemanagementsystem.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long>
{
}