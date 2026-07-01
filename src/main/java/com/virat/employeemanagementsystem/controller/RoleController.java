package com.virat.employeemanagementsystem.controller;

import com.virat.employeemanagementsystem.common.constants.MessageConstants;
import com.virat.employeemanagementsystem.common.response.ApiResponse;
import com.virat.employeemanagementsystem.dto.request.RoleRequestDTO;
import com.virat.employeemanagementsystem.dto.response.RoleResponseDTO;
import com.virat.employeemanagementsystem.service.RoleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
@RequiredArgsConstructor
public class RoleController {

    private final RoleService roleService;

    @PostMapping
    public ResponseEntity<ApiResponse<RoleResponseDTO>> saveRole(
            @Valid @RequestBody RoleRequestDTO requestDTO) {

        RoleResponseDTO response =
                roleService.saveRole(requestDTO);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(
                        MessageConstants.ROLE_CREATED,
                        response
                ));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<RoleResponseDTO>>> getAllRoles() {

        List<RoleResponseDTO> response =
                roleService.getAllRoles();

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.ROLES_FETCHED,
                        response
                )
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<RoleResponseDTO>> getRoleById(
            @PathVariable Long id) {

        RoleResponseDTO response =
                roleService.getRoleById(id);

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.ROLE_FETCHED,
                        response
                )
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<RoleResponseDTO>> updateRole(
            @PathVariable Long id,
            @Valid @RequestBody RoleRequestDTO requestDTO) {

        RoleResponseDTO response =
                roleService.updateRole(id, requestDTO);

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.ROLE_UPDATED,
                        response
                )
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteRole(
            @PathVariable Long id) {

        roleService.deleteRole(id);

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.ROLE_DELETED,
                        null
                )
        );
    }
}