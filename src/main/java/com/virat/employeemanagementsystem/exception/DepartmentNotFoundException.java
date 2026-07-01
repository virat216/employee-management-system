package com.virat.employeemanagementsystem.exception;

public class DepartmentNotFoundException extends RuntimeException {

    public DepartmentNotFoundException(String message) {
        super(message);
    }

    public DepartmentNotFoundException(Long id) {
        super("Department not found with id: " + id);
    }
}