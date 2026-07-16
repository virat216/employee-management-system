package com.virat.employeemanagementsystem.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChartDataResponseDTO {

    private String label;

    private Long count;

}