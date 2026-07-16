package com.virat.employeemanagementsystem.service;

import com.virat.employeemanagementsystem.common.response.PageResponse;
import com.virat.employeemanagementsystem.dto.request.UserRequestDTO;
import com.virat.employeemanagementsystem.dto.response.EmployeeSummaryDTO;
import com.virat.employeemanagementsystem.dto.response.UserResponseDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface UserService {

    UserResponseDTO saveUser(UserRequestDTO requestDTO);

    UserResponseDTO getUserById(Long id);

    PageResponse<UserResponseDTO> getAllUsers(
            Pageable pageable,
            String search
    );

    UserResponseDTO updateUser(
            Long id,
            UserRequestDTO requestDTO
    );

    void deleteUser(Long id);

    List<EmployeeSummaryDTO> getAvailableEmployees();

}