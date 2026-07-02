package com.virat.employeemanagementsystem.controller;

import com.virat.employeemanagementsystem.common.response.ApiResponse;
import com.virat.employeemanagementsystem.dto.request.LoginRequestDTO;
import com.virat.employeemanagementsystem.dto.response.LoginResponseDTO;
import com.virat.employeemanagementsystem.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<LoginResponseDTO>> login(
            @Valid @RequestBody LoginRequestDTO requestDTO) {

        LoginResponseDTO response =
                authService.login(requestDTO);

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Login successful.",
                        response
                )
        );
    }
}