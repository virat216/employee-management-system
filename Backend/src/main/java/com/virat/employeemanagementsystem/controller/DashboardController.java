package com.virat.employeemanagementsystem.controller;

import com.virat.employeemanagementsystem.common.constants.MessageConstants;
import com.virat.employeemanagementsystem.common.response.ApiResponse;
import com.virat.employeemanagementsystem.dto.response.DashboardSummaryResponseDTO;
import com.virat.employeemanagementsystem.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}