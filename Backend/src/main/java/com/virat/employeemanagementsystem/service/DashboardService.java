package com.virat.employeemanagementsystem.service;

import com.virat.employeemanagementsystem.dto.response.ChartDataResponseDTO;
import com.virat.employeemanagementsystem.dto.response.DashboardSummaryResponseDTO;
import com.virat.employeemanagementsystem.dto.response.RecentEmployeeResponseDTO;

import java.util.List;

public interface DashboardService {

    DashboardSummaryResponseDTO getDashboardSummary();

    List<RecentEmployeeResponseDTO> getRecentEmployees();

    List<ChartDataResponseDTO> getEmployeesByDepartment();

    List<ChartDataResponseDTO> getEmployeesByRole();

}