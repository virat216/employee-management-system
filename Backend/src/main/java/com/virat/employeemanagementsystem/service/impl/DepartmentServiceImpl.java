package com.virat.employeemanagementsystem.service.impl;

import com.virat.employeemanagementsystem.common.response.PageResponse;
import com.virat.employeemanagementsystem.dto.request.DepartmentRequestDTO;
import com.virat.employeemanagementsystem.dto.response.DepartmentResponseDTO;
import com.virat.employeemanagementsystem.entity.Department;
import com.virat.employeemanagementsystem.exception.DepartmentDeletionException;
import com.virat.employeemanagementsystem.exception.DepartmentNotFoundException;
import com.virat.employeemanagementsystem.mapper.DepartmentMapper;
import com.virat.employeemanagementsystem.repository.DepartmentRepository;
import com.virat.employeemanagementsystem.repository.EmployeeRepository;
import com.virat.employeemanagementsystem.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    private final DepartmentMapper departmentMapper;

    private final EmployeeRepository employeeRepository;

    @Override
    public DepartmentResponseDTO saveDepartment(DepartmentRequestDTO requestDTO) {

        String name = requestDTO.getName().trim();
        String location = requestDTO.getLocation().trim();

        if (departmentRepository.existsByNameIgnoreCase(name)) {
            throw new IllegalArgumentException(
                    "Department with name '" + name + "' already exists."
            );
        }

        Department department = departmentMapper.toEntity(requestDTO);

        department.setName(name);
        department.setLocation(location);

        Department savedDepartment =
                departmentRepository.save(department);

        return departmentMapper.toResponseDTO(savedDepartment);
    }

    @Override
    public PageResponse<DepartmentResponseDTO> getAllDepartments(
            Pageable pageable,
            String search
    ) {

        Page<Department> departmentPage;

        if (search == null || search.isBlank()) {

            departmentPage = departmentRepository.findAll(pageable);

        } else {

            departmentPage =
                    departmentRepository
                            .findByNameContainingIgnoreCaseOrLocationContainingIgnoreCase(
                                    search.trim(),
                                    search.trim(),
                                    pageable
                            );
        }

        List<DepartmentResponseDTO> content =
                departmentPage.getContent()
                        .stream()
                        .map(departmentMapper::toResponseDTO)
                        .toList();

        return PageResponse.<DepartmentResponseDTO>builder()
                .content(content)
                .page(departmentPage.getNumber())
                .size(departmentPage.getSize())
                .totalElements(departmentPage.getTotalElements())
                .totalPages(departmentPage.getTotalPages())
                .last(departmentPage.isLast())
                .build();
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
    public DepartmentResponseDTO updateDepartment(
            Long id,
            DepartmentRequestDTO requestDTO
    ) {

        Department existingDepartment =
                departmentRepository.findById(id)
                        .orElseThrow(() ->
                                new DepartmentNotFoundException(
                                        "Department not found with id : " + id
                                ));

        String name = requestDTO.getName().trim();
        String location = requestDTO.getLocation().trim();

        if (departmentRepository.existsByNameIgnoreCaseAndIdNot(name, id)) {
            throw new IllegalArgumentException(
                    "Department with name '" + name + "' already exists."
            );
        }

        existingDepartment.setName(name);
        existingDepartment.setLocation(location);

        Department updatedDepartment =
                departmentRepository.save(existingDepartment);

        return departmentMapper.toResponseDTO(updatedDepartment);
    }

    @Override
    public void deleteDepartment(Long id) {

        Department department =
                departmentRepository.findById(id)
                        .orElseThrow(() ->
                                new DepartmentNotFoundException(
                                        "Department not found with id : " + id
                                ));

        if (employeeRepository.existsByDepartmentId(id)) {
            throw new DepartmentDeletionException(
                    "Cannot delete department because employees are assigned to it."
            );
        }

        departmentRepository.delete(department);
    }

    @Override
    public List<DepartmentResponseDTO> getDepartmentLookup() {

        return departmentRepository.findAll()
                .stream()
                .map(departmentMapper::toResponseDTO)
                .toList();

    }

}