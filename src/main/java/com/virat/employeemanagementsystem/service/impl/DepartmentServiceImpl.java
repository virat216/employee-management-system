package com.virat.employeemanagementsystem.service.impl;

import com.virat.employeemanagementsystem.dto.request.DepartmentRequestDTO;
import com.virat.employeemanagementsystem.dto.response.DepartmentResponseDTO;
import com.virat.employeemanagementsystem.entity.Department;
import com.virat.employeemanagementsystem.exception.DepartmentNotFoundException;
import com.virat.employeemanagementsystem.mapper.DepartmentMapper;
import com.virat.employeemanagementsystem.repository.DepartmentRepository;
import com.virat.employeemanagementsystem.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    private final DepartmentMapper departmentMapper;

    @Override
    public DepartmentResponseDTO saveDepartment(DepartmentRequestDTO requestDTO) {

        Department department = departmentMapper.toEntity(requestDTO);

        Department savedDepartment = departmentRepository.save(department);

        return departmentMapper.toResponseDTO(savedDepartment);
    }

    @Override
    public List<DepartmentResponseDTO> getAllDepartments() {

        List<Department> departments =
                departmentRepository.findAll();

        return departments.stream()
                .map(departmentMapper::toResponseDTO)
                .toList();
    }

    @Override
    public DepartmentResponseDTO getDepartmentById(Long id) {

        Department department = departmentRepository.findById(id)
                .orElseThrow(() ->
                        new DepartmentNotFoundException(
                                "Department not found with id : " + id));

        return departmentMapper.toResponseDTO(department);
    }

    @Override
    public DepartmentResponseDTO updateDepartment(Long id,
                                                  DepartmentRequestDTO requestDTO) {

        Department existingDepartment = departmentRepository.findById(id)
                .orElseThrow(() ->
                        new DepartmentNotFoundException(
                                "Department not found with id : " + id));

        existingDepartment.setName(requestDTO.getName());
        existingDepartment.setLocation(requestDTO.getLocation());

        Department updatedDepartment =
                departmentRepository.save(existingDepartment);

        return departmentMapper.toResponseDTO(updatedDepartment);
    }

    @Override
    public void deleteDepartment(Long id) {

        Department department = departmentRepository.findById(id)
                .orElseThrow(() ->
                        new DepartmentNotFoundException(
                                "Department not found with id : " + id));

        departmentRepository.delete(department);
    }

}