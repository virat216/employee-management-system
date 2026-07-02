package com.virat.employeemanagementsystem.service;

import com.virat.employeemanagementsystem.dto.request.LoginRequestDTO;
import com.virat.employeemanagementsystem.dto.response.LoginResponseDTO;

public interface AuthService {

    LoginResponseDTO login(LoginRequestDTO requestDTO);

}