package com.virat.employeemanagementsystem.exception;

public class RoleAlreadyExistsException
        extends ConflictException {

    public RoleAlreadyExistsException(String message) {
        super(message);
    }
}
