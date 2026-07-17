package com.virat.employeemanagementsystem.service;

import com.virat.employeemanagementsystem.dto.request.LoginRequestDTO;
import com.virat.employeemanagementsystem.dto.response.CurrentUserResponseDTO;
import com.virat.employeemanagementsystem.dto.response.LoginResponseDTO;
import com.virat.employeemanagementsystem.dto.response.ProfileResponseDTO;

public interface AuthService {

    LoginResponseDTO login(LoginRequestDTO requestDTO);

    ProfileResponseDTO getCurrentUser();
}