package com.virat.employeemanagementsystem.service;

import com.virat.employeemanagementsystem.common.response.PageResponse;
import com.virat.employeemanagementsystem.dto.request.DepartmentRequestDTO;
import com.virat.employeemanagementsystem.dto.response.DepartmentResponseDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface DepartmentService {

    DepartmentResponseDTO saveDepartment(
            DepartmentRequestDTO requestDTO
    );

    PageResponse<DepartmentResponseDTO> getAllDepartments(
            Pageable pageable,
            String search
    );

    DepartmentResponseDTO getDepartmentById(
            Long id
    );

    DepartmentResponseDTO updateDepartment(
            Long id,
            DepartmentRequestDTO requestDTO
    );

    void deleteDepartment(
            Long id
    );

    List<DepartmentResponseDTO> getDepartmentLookup();
}