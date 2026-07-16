package com.virat.employeemanagementsystem.controller;

import com.virat.employeemanagementsystem.common.constants.MessageConstants;
import com.virat.employeemanagementsystem.common.response.ApiResponse;
import com.virat.employeemanagementsystem.dto.request.UserRequestDTO;
import com.virat.employeemanagementsystem.dto.response.EmployeeSummaryDTO;
import com.virat.employeemanagementsystem.dto.response.UserResponseDTO;
import com.virat.employeemanagementsystem.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.virat.employeemanagementsystem.common.response.PageResponse;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/employee-lookup")
    public ResponseEntity<ApiResponse<List<EmployeeSummaryDTO>>> getAvailableEmployees() {

        List<EmployeeSummaryDTO> response =
                userService.getAvailableEmployees();

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Available employees fetched successfully.",
                        response
                )
        );

    }

    @PostMapping
    public ResponseEntity<ApiResponse<UserResponseDTO>> saveUser(
            @Valid @RequestBody UserRequestDTO requestDTO) {

        UserResponseDTO response =
                userService.saveUser(requestDTO);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(
                        MessageConstants.USER_CREATED,
                        response
                ));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<PageResponse<UserResponseDTO>>> getAllUsers(

            @RequestParam(defaultValue = "0")
            int page,

            @RequestParam(defaultValue = "30")
            int size,

            @RequestParam(defaultValue = "id")
            String sortBy,

            @RequestParam(defaultValue = "asc")
            String direction,

            @RequestParam(defaultValue = "")
            String search

    ) {

        Sort sort = direction.equalsIgnoreCase("desc")

                ? Sort.by(sortBy).descending()

                : Sort.by(sortBy).ascending();

        Pageable pageable =

                PageRequest.of(page, size, sort);

        PageResponse<UserResponseDTO> response =

                userService.getAllUsers(

                        pageable,

                        search

                );

        return ResponseEntity.ok(

                ApiResponse.success(

                        MessageConstants.USERS_FETCHED,

                        response

                )

        );

    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserResponseDTO>> getUserById(
            @PathVariable Long id) {

        UserResponseDTO response =
                userService.getUserById(id);

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.USER_FETCHED,
                        response
                )
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<UserResponseDTO>> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserRequestDTO requestDTO) {

        UserResponseDTO response =
                userService.updateUser(id, requestDTO);

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.USER_UPDATED,
                        response
                )
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteUser(
            @PathVariable Long id) {

        userService.deleteUser(id);

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.USER_DELETED,
                        null
                )
        );
    }
}