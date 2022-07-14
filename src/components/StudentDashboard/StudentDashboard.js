import React from 'react'
import Chart from 'react-google-charts'
import { StudentDashboardNavigator } from './StudentDashboardNavigator'
import { AnalyticsContainer, ChartContainer, Container, H3 } from './StudentDashboardStyles'

export const StudentDashboard = () => {
    const data = [
        ["Task", "Ratio"],
        ["Completed", 4],
        ["Not Completed", 6],
    ];

    const options = {
        title: "Science Analytics",
        is3D: true,
        'backgroundColor': 'transparent' //Analytics Chart Transparent
    };

    return (
        <Container>
            <H3>Dashboard</H3>
            <AnalyticsContainer>
                <h4>Analytics</h4>
                <StudentDashboardNavigator />
                <ChartContainer>
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"300px"}
                    />
                </ChartContainer>

            </AnalyticsContainer>

        </Container>
    )
}
