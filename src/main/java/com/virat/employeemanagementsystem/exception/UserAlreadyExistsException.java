package com.virat.employeemanagementsystem.exception;

public class UserAlreadyExistsException
        extends ConflictException {

    public UserAlreadyExistsException(String message) {
        super(message);
    }
}
