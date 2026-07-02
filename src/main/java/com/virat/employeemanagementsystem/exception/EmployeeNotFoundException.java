package com.virat.employeemanagementsystem.exception;

public class EmployeeNotFoundException
        extends ResourceNotFoundException {

    public EmployeeNotFoundException(String message) {
        super(message);
    }
}