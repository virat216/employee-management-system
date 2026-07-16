package com.virat.employeemanagementsystem.controller;

import com.virat.employeemanagementsystem.common.constants.MessageConstants;
import com.virat.employeemanagementsystem.common.response.ApiResponse;
import com.virat.employeemanagementsystem.dto.response.ChartDataResponseDTO;
import com.virat.employeemanagementsystem.dto.response.DashboardSummaryResponseDTO;
import com.virat.employeemanagementsystem.dto.response.RecentEmployeeResponseDTO;
import com.virat.employeemanagementsystem.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping("/summary")
    public ResponseEntity<ApiResponse<DashboardSummaryResponseDTO>>
    getDashboardSummary() {

        return ResponseEntity.ok(
                ApiResponse.success(
                        MessageConstants.DASHBOARD_SUMMARY_FETCHED,
                        dashboardService.getDashboardSummary()
                )
        );
    }

    @GetMapping("/recent-employees")
    public ResponseEntity<ApiResponse<List<RecentEmployeeResponseDTO>>> getRecentEmployees() {

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Recent employees fetched successfully.",
                        dashboardService.getRecentEmployees()
                )
        );

    }

    @GetMapping("/employees-by-department")
    public ResponseEntity<ApiResponse<List<ChartDataResponseDTO>>> getEmployeesByDepartment() {

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Department chart fetched.",
                        dashboardService.getEmployeesByDepartment()
                )
        );

    }

    @GetMapping("/employees-by-role")
    public ResponseEntity<ApiResponse<List<ChartDataResponseDTO>>> getEmployeesByRole() {

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Role chart fetched.",
                        dashboardService.getEmployeesByRole()
                )
        );

    }
}