package com.virat.employeemanagementsystem.service.impl;

import com.virat.employeemanagementsystem.dto.request.RoleRequestDTO;
import com.virat.employeemanagementsystem.dto.response.RoleResponseDTO;
import com.virat.employeemanagementsystem.entity.Role;
import com.virat.employeemanagementsystem.exception.RoleAlreadyExistsException;
import com.virat.employeemanagementsystem.exception.RoleNotFoundException;
import com.virat.employeemanagementsystem.mapper.RoleMapper;
import com.virat.employeemanagementsystem.repository.RoleRepository;
import com.virat.employeemanagementsystem.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    private final RoleMapper roleMapper;

    @Override
    @Transactional
    public RoleResponseDTO saveRole(RoleRequestDTO requestDTO) {

        if (roleRepository.existsByName(requestDTO.getName())) {
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
    public List<RoleResponseDTO> getAllRoles() {

        List<Role> roles = roleRepository.findAll();

        return roleMapper.toResponseDTOList(roles);
    }

    @Override
    @Transactional
    public RoleResponseDTO updateRole(Long id, RoleRequestDTO requestDTO) {

        Role role = findRoleById(id);

        if (!role.getName().equalsIgnoreCase(requestDTO.getName())
                && roleRepository.existsByName(requestDTO.getName())) {

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

        role.setActive(false);
    }

    private Role findRoleById(Long id) {

        return roleRepository.findById(id)
                .orElseThrow(() -> new RoleNotFoundException("Role not found with id: "+id));
    }

    @Override
    public List<RoleResponseDTO> getRoleLookup() {

        return roleRepository.findAll()
                .stream()
                .map(roleMapper::toResponseDTO)
                .toList();

    }
}