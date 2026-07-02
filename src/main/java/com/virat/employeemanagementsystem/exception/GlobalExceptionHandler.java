package com.virat.employeemanagementsystem.exception;

import com.virat.employeemanagementsystem.common.response.ApiErrorResponse;
import com.virat.employeemanagementsystem.common.response.ValidationErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {


    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ValidationErrorResponse> handleValidationException(
            MethodArgumentNotValidException ex) {

        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult()
                .getFieldErrors()
                .forEach(error ->
                        errors.put(
                                error.getField(),
                                error.getDefaultMessage()
                        ));

        return ResponseEntity.badRequest()
                .body(buildValidationErrorResponse(
                        HttpStatus.BAD_REQUEST,
                        "Validation failed",
                        errors
                ));
    }

    private ApiErrorResponse buildErrorResponse(
            HttpStatus status,
            String message) {

        return ApiErrorResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(status.value())
                .error(status.name())
                .message(message)
                .build();
    }

    private ValidationErrorResponse buildValidationErrorResponse(
            HttpStatus status,
            String message,
            Map<String, String> errors) {

        return ValidationErrorResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(status.value())
                .error(status.name())
                .message(message)
                .errors(errors)
                .build();
    }

    @ExceptionHandler(InactiveRoleException.class)
    public ResponseEntity<ApiErrorResponse> handleInactiveRole(
            InactiveRoleException ex) {

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(
                        buildErrorResponse(
                                HttpStatus.BAD_REQUEST,
                                ex.getMessage()
                        )
                );
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiErrorResponse> handleResourceNotFound(
            ResourceNotFoundException ex) {

        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(
                        buildErrorResponse(
                                HttpStatus.NOT_FOUND,
                                ex.getMessage()
                        )
                );
    }

    @ExceptionHandler(ConflictException.class)
    public ResponseEntity<ApiErrorResponse> handleConflict(
            ConflictException ex) {

        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(
                        buildErrorResponse(
                                HttpStatus.CONFLICT,
                                ex.getMessage()
                        )
                );
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiErrorResponse> handleAccessDenied(
            AccessDeniedException ex) {

        return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(
                        buildErrorResponse(
                                HttpStatus.FORBIDDEN,
                                "You are not authorized to perform this action."
                        )
                );
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ApiErrorResponse> handleAuthenticationException(
            AuthenticationException ex) {

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(
                        buildErrorResponse(
                                HttpStatus.UNAUTHORIZED,
                                "Invalid username or password."
                        )
                );
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiErrorResponse> handleException(
            Exception ex) {

        ex.printStackTrace();

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(
                        buildErrorResponse(
                                HttpStatus.INTERNAL_SERVER_ERROR,
                                "Something went wrong. Please try again later."
                        )
                );
    }
}