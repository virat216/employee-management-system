package com.virat.employeemanagementsystem.exception;

public class InactiveRoleException
        extends RuntimeException {

    public InactiveRoleException(Long id) {

        super("Role with id " + id +
                " is inactive and cannot be assigned.");

    }

}