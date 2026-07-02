package com.virat.employeemanagementsystem.mapper;

import com.virat.employeemanagementsystem.dto.request.UserRequestDTO;
import com.virat.employeemanagementsystem.dto.response.UserResponseDTO;
import com.virat.employeemanagementsystem.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(
        componentModel = "spring",
        uses = {
                EmployeeMapper.class
        }
)
public interface UserMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "employee", ignore = true)
    User toEntity(UserRequestDTO dto);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "employee", ignore = true)
    void updateEntity(
            UserRequestDTO dto,
            @MappingTarget User user
    );

    UserResponseDTO toResponseDTO(User user);

    List<UserResponseDTO> toResponseDTOList(
            List<User> users
    );
}