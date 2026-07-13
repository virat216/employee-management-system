package com.virat.employeemanagementsystem.service;

import com.virat.employeemanagementsystem.dto.request.EmployeeRequestDTO;
import com.virat.employeemanagementsystem.dto.response.EmployeeResponseDTO;
import com.virat.employeemanagementsystem.common.response.PageResponse;
import org.springframework.data.domain.Pageable;
import com.virat.employeemanagementsystem.dto.request.EmployeeFilterRequestDTO;

import java.util.List;

public interface EmployeeService {

    EmployeeResponseDTO saveEmployee(EmployeeRequestDTO requestDTO);

    EmployeeResponseDTO getEmployeeById(Long id);

    PageResponse<EmployeeResponseDTO> getAllEmployees(
            Pageable pageable,
            EmployeeFilterRequestDTO filterRequestDTO
    );

    EmployeeResponseDTO updateEmployee(
            Long id,
            EmployeeRequestDTO requestDTO
    );

    void deleteEmployee(Long id);

}