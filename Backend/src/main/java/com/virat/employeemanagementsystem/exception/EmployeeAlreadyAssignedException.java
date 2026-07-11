package com.virat.employeemanagementsystem.exception;

public class EmployeeAlreadyAssignedException
        extends ConflictException {

    public EmployeeAlreadyAssignedException(String message) {
        super(message);
    }
}