package com.virat.employeemanagementsystem.service;

import com.virat.employeemanagementsystem.dto.request.EmployeeRequestDTO;
import com.virat.employeemanagementsystem.dto.response.EmployeeResponseDTO;

import java.util.List;

public interface EmployeeService {

    EmployeeResponseDTO saveEmployee(EmployeeRequestDTO requestDTO);

    EmployeeResponseDTO getEmployeeById(Long id);

    List<EmployeeResponseDTO> getAllEmployees();

    EmployeeResponseDTO updateEmployee(
            Long id,
            EmployeeRequestDTO requestDTO
    );

    void deleteEmployee(Long id);

}