package com.virat.employeemanagementsystem.service.impl;

import com.virat.employeemanagementsystem.dto.request.LoginRequestDTO;
import com.virat.employeemanagementsystem.dto.response.LoginResponseDTO;
import com.virat.employeemanagementsystem.security.jwt.JwtService;
import com.virat.employeemanagementsystem.security.principal.CustomUserPrincipal;
import com.virat.employeemanagementsystem.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;

    @Override
    public LoginResponseDTO login(LoginRequestDTO requestDTO) {

        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                requestDTO.getUsername(),
                                requestDTO.getPassword()
                        )
                );

        CustomUserPrincipal principal =
                (CustomUserPrincipal) authentication.getPrincipal();

        String token =
                jwtService.generateToken(principal);

        return LoginResponseDTO.builder()
                .token(token)
                .tokenType("Bearer")
                .userId(principal.getId())
                .employeeId(principal.getEmployeeId())
                .username(principal.getUsername())
                .build();
    }
}