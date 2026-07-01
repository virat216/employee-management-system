package com.virat.employeemanagementsystem.service;

import com.virat.employeemanagementsystem.dto.request.DepartmentRequestDTO;
import com.virat.employeemanagementsystem.dto.response.DepartmentResponseDTO;

import java.util.List;

public interface DepartmentService {

    DepartmentResponseDTO saveDepartment(DepartmentRequestDTO requestDTO);

    List<DepartmentResponseDTO> getAllDepartments();

    DepartmentResponseDTO getDepartmentById(Long id);

    DepartmentResponseDTO updateDepartment(Long id,
                                           DepartmentRequestDTO requestDTO);

    void deleteDepartment(Long id);

}