package com.virat.employeemanagementsystem.service;

import com.virat.employeemanagementsystem.common.response.PageResponse;
import com.virat.employeemanagementsystem.dto.request.RoleRequestDTO;
import com.virat.employeemanagementsystem.dto.response.RoleResponseDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface RoleService {

    RoleResponseDTO saveRole(RoleRequestDTO requestDTO);

    RoleResponseDTO getRoleById(Long id);

    PageResponse<RoleResponseDTO> getAllRoles(
            Pageable pageable,
            String search
    );

    RoleResponseDTO updateRole(
            Long id,
            RoleRequestDTO requestDTO
    );

    void deleteRole(Long id);

    List<RoleResponseDTO> getRoleLookup();

}