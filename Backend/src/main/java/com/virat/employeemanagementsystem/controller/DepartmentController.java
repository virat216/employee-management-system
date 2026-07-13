package com.virat.employeemanagementsystem.controller;

import com.virat.employeemanagementsystem.common.constants.MessageConstants;
import com.virat.employeemanagementsystem.common.response.ApiResponse;
import com.virat.employeemanagementsystem.common.response.PageResponse;
import com.virat.employeemanagementsystem.dto.request.DepartmentRequestDTO;
import com.virat.employeemanagementsystem.dto.response.DepartmentResponseDTO;
import com.virat.employeemanagementsystem.service.DepartmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

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
    public ResponseEntity<ApiResponse<PageResponse<DepartmentResponseDTO>>> getAllDepartments(

            @RequestParam(defaultValue = "0")
            int page,

            @RequestParam(defaultValue = "30")
            int size,

            @RequestParam(defaultValue = "id")
            String sortBy,

            @RequestParam(defaultValue = "asc")
            String direction,

            @RequestParam(defaultValue = "")
            String search

    ) {

        Sort sort = direction.equalsIgnoreCase("desc")
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();

        Pageable pageable = PageRequest.of(page, size, sort);

        PageResponse<DepartmentResponseDTO> response =
                departmentService.getAllDepartments(pageable,search);

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.DEPARTMENTS_FETCHED,
                        response
                )
        );
    }

    @GetMapping("/lookup")
    public ResponseEntity<ApiResponse<List<DepartmentResponseDTO>>> getDepartmentLookup() {

        List<DepartmentResponseDTO> response =
                departmentService.getDepartmentLookup();

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.DEPARTMENTS_FETCHED,
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