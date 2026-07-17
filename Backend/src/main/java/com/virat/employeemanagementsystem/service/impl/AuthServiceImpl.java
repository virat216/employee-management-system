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
import com.virat.employeemanagementsystem.dto.response.ProfileResponseDTO;
import com.virat.employeemanagementsystem.entity.User;
import com.virat.employeemanagementsystem.exception.UserNotFoundException;
import com.virat.employeemanagementsystem.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;

    private final UserRepository userRepository;

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

    @Override
    public ProfileResponseDTO getCurrentUser() {

        Authentication authentication =
                SecurityContextHolder
                        .getContext()
                        .getAuthentication();

        CustomUserPrincipal principal =
                (CustomUserPrincipal) authentication.getPrincipal();

        User user = userRepository
                .findByUsername(principal.getUsername())
                .orElseThrow(() ->
                        new UserNotFoundException(
                                "User not found."
                        )
                );

        return ProfileResponseDTO.builder()
                .id(user.getId())
                .username(user.getUsername())

                .firstName(user.getEmployee().getFirstName())
                .lastName(user.getEmployee().getLastName())
                .email(user.getEmployee().getEmail())
                .phone(user.getEmployee().getPhone())

                .department(
                        user.getEmployee()
                                .getDepartment()
                                .getName()
                )

                .role(
                        user.getEmployee()
                                .getRole()
                                .getName()
                )

                .hireDate(
                        user.getEmployee()
                                .getHireDate()
                )

                .securityRole(
                        user.getSecurityRole()
                )

                .enabled(
                        user.isEnabled()
                )

                .build();
    }
}