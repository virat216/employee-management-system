package com.virat.employeemanagementsystem.controller;

import com.virat.employeemanagementsystem.common.constants.MessageConstants;
import com.virat.employeemanagementsystem.common.response.ApiResponse;
import com.virat.employeemanagementsystem.dto.request.DepartmentRequestDTO;
import com.virat.employeemanagementsystem.dto.response.DepartmentResponseDTO;
import com.virat.employeemanagementsystem.service.DepartmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/departments")
@RequiredArgsConstructor
public class DepartmentController
{
    private final DepartmentService departmentService;

    @PostMapping
    public ResponseEntity<ApiResponse<DepartmentResponseDTO>> saveDepartment(
            @Valid @RequestBody DepartmentRequestDTO requestDTO)
    {

        DepartmentResponseDTO response =
                departmentService.saveDepartment(requestDTO);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(
                        MessageConstants.DEPARTMENT_CREATED,
                        response
                ));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<DepartmentResponseDTO>>> getAllDepartments()
    {
        List<DepartmentResponseDTO> response = departmentService.getAllDepartments();

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.DEPARTMENT_FETCHED,
                        response
                )
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<DepartmentResponseDTO>>getDepartmentById(
            @PathVariable Long id)
    {
        DepartmentResponseDTO response =
                departmentService.getDepartmentById(id);

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.DEPARTMENT_FETCHED,
                        response
                )
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<DepartmentResponseDTO>> updateDepartment(
            @PathVariable Long id,
            @Valid
            @RequestBody DepartmentRequestDTO requestDTO)
    {
        DepartmentResponseDTO response =
                departmentService.updateDepartment(id, requestDTO);

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.DEPARTMENT_UPDATED,
                        response
                )
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteDepartment(
            @PathVariable Long id)
    {
        departmentService.deleteDepartment(id);

        return ResponseEntity.ok(
                ApiResponse.<Void>success(
                        MessageConstants.DEPARTMENT_DELETED,
                        null
                )
        );
    }

}