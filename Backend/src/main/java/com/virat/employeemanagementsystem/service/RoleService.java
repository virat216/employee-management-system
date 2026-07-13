package com.virat.employeemanagementsystem.service;

import com.virat.employeemanagementsystem.dto.request.RoleRequestDTO;
import com.virat.employeemanagementsystem.dto.response.RoleResponseDTO;

import java.util.List;

public interface RoleService {

    RoleResponseDTO saveRole(RoleRequestDTO requestDTO);

    RoleResponseDTO getRoleById(Long id);

    List<RoleResponseDTO> getAllRoles();

    RoleResponseDTO updateRole(
            Long id,
            RoleRequestDTO requestDTO
    );

    void deleteRole(Long id);

    List<RoleResponseDTO> getRoleLookup();

}