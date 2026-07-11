package com.virat.employeemanagementsystem.mapper;

import com.virat.employeemanagementsystem.dto.request.RoleRequestDTO;
import com.virat.employeemanagementsystem.dto.response.RoleResponseDTO;
import com.virat.employeemanagementsystem.dto.response.RoleSummaryDTO;
import com.virat.employeemanagementsystem.entity.Role;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RoleMapper {

    @org.mapstruct.Mapping(target = "id", ignore = true)
    Role toEntity(RoleRequestDTO dto);

    @org.mapstruct.Mapping(target = "id", ignore = true)
    void updateEntity(
            RoleRequestDTO dto,
            @MappingTarget Role role
    );

    RoleResponseDTO toResponseDTO(Role role);

    List<RoleResponseDTO> toResponseDTOList(List<Role> roles);

    RoleSummaryDTO toSummaryDTO(Role role);

}