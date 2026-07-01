package com.virat.employeemanagementsystem.mapper;

import com.virat.employeemanagementsystem.dto.request.DepartmentRequestDTO;
import com.virat.employeemanagementsystem.dto.response.DepartmentResponseDTO;
import com.virat.employeemanagementsystem.dto.response.DepartmentSummaryDTO;
import com.virat.employeemanagementsystem.entity.Department;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface DepartmentMapper {

    Department toEntity(DepartmentRequestDTO dto);

    DepartmentResponseDTO toResponseDTO(Department department);

    List<DepartmentResponseDTO> toResponseDTOList( List<Department> departments);

    DepartmentSummaryDTO toSummaryDTO(Department department);

}