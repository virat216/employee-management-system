package com.virat.employeemanagementsystem.service.impl;

import com.virat.employeemanagementsystem.common.response.PageResponse;
import com.virat.employeemanagementsystem.dto.request.RoleRequestDTO;
import com.virat.employeemanagementsystem.dto.response.RoleResponseDTO;
import com.virat.employeemanagementsystem.entity.Role;
import com.virat.employeemanagementsystem.exception.RoleAlreadyExistsException;
import com.virat.employeemanagementsystem.exception.RoleDeletionException;
import com.virat.employeemanagementsystem.exception.RoleNotFoundException;
import com.virat.employeemanagementsystem.mapper.RoleMapper;
import com.virat.employeemanagementsystem.repository.EmployeeRepository;
import com.virat.employeemanagementsystem.repository.RoleRepository;
import com.virat.employeemanagementsystem.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    private final EmployeeRepository employeeRepository;

    private final RoleMapper roleMapper;

    @Override
    @Transactional
    public RoleResponseDTO saveRole(RoleRequestDTO requestDTO) {

        if (roleRepository.existsByNameIgnoreCase(requestDTO.getName())) {
            throw new RoleAlreadyExistsException(requestDTO.getName());
        }

        Role role = roleMapper.toEntity(requestDTO);

        Role savedRole = roleRepository.save(role);

        return roleMapper.toResponseDTO(savedRole);
    }

    @Override
    public RoleResponseDTO getRoleById(Long id) {

        Role role = findRoleById(id);

        return roleMapper.toResponseDTO(role);
    }

    @Override
    public PageResponse<RoleResponseDTO> getAllRoles(
            Pageable pageable,
            String search
    ) {

        Page<Role> rolePage =
                roleRepository
                        .findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(
                                search,
                                search,
                                pageable
                        );

        List<RoleResponseDTO> content =
                rolePage.getContent()
                        .stream()
                        .map(roleMapper::toResponseDTO)
                        .toList();

        return PageResponse.<RoleResponseDTO>builder()
                .content(content)
                .page(rolePage.getNumber())
                .size(rolePage.getSize())
                .totalElements(rolePage.getTotalElements())
                .totalPages(rolePage.getTotalPages())
                .last(rolePage.isLast())
                .build();
    }

    @Override
    @Transactional
    public RoleResponseDTO updateRole(
            Long id,
            RoleRequestDTO requestDTO
    ) {

        Role role = findRoleById(id);

        if (!role.getName().equalsIgnoreCase(requestDTO.getName())
                && roleRepository.existsByNameIgnoreCase(requestDTO.getName())) {

            throw new RoleAlreadyExistsException(requestDTO.getName());
        }

        roleMapper.updateEntity(requestDTO, role);

        Role updatedRole = roleRepository.save(role);

        return roleMapper.toResponseDTO(updatedRole);
    }

    @Override
    @Transactional
    public void deleteRole(Long id) {

        Role role = findRoleById(id);

        if (employeeRepository.existsByRoleId(id)) {
            throw new RoleDeletionException(
                    "Cannot deactivate role because employees are assigned."
            );
        }

        role.setActive(false);
    }

    @Override
    public List<RoleResponseDTO> getRoleLookup() {

        return roleRepository.findByActiveTrue()
                .stream()
                .map(roleMapper::toResponseDTO)
                .toList();
    }

    private Role findRoleById(Long id) {

        return roleRepository.findById(id)
                .orElseThrow(() ->
                        new RoleNotFoundException(
                                "Role not found with id : " + id
                        ));
    }
}