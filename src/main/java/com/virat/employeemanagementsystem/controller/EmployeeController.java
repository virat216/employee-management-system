package com.virat.employeemanagementsystem.controller;

import com.virat.employeemanagementsystem.common.constants.MessageConstants;
import com.virat.employeemanagementsystem.common.response.ApiResponse;
import com.virat.employeemanagementsystem.dto.request.EmployeeRequestDTO;
import com.virat.employeemanagementsystem.dto.response.EmployeeResponseDTO;
import com.virat.employeemanagementsystem.service.EmployeeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<ApiResponse<EmployeeResponseDTO>> saveEmployee(
            @Valid @RequestBody EmployeeRequestDTO requestDTO) {

        EmployeeResponseDTO response =
                employeeService.saveEmployee(requestDTO);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(
                        MessageConstants.EMPLOYEE_CREATED,
                        response
                ));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<EmployeeResponseDTO>>> getAllEmployees() {

        List<EmployeeResponseDTO> response =
                employeeService.getAllEmployees();

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.EMPLOYEES_FETCHED,
                        response
                )
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<EmployeeResponseDTO>> getEmployeeById(
            @PathVariable Long id) {

        EmployeeResponseDTO response =
                employeeService.getEmployeeById(id);

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.EMPLOYEE_FETCHED,
                        response
                )
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<EmployeeResponseDTO>> updateEmployee(
            @PathVariable Long id,
            @Valid @RequestBody EmployeeRequestDTO requestDTO) {

        EmployeeResponseDTO response =
                employeeService.updateEmployee(id, requestDTO);

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.EMPLOYEE_UPDATED,
                        response
                )
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteEmployee(
            @PathVariable Long id) {

        employeeService.deleteEmployee(id);

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.EMPLOYEE_DELETED,
                        null
                )
        );
    }
}