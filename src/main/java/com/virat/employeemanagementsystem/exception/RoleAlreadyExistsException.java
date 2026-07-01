package com.virat.employeemanagementsystem.exception;

public class RoleAlreadyExistsException extends RuntimeException {

    public RoleAlreadyExistsException(String roleName) {
        super("Role already exists with name: " + roleName);
    }

}