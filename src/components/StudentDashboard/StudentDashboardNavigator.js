import React from 'react'
import { DashboardNavigator, DashboardNavigatorButton, DashboardNavigatorButtonClicked } from './StudentDashboardStyles'

export const StudentDashboardNavigator = () => {
  return (
    <DashboardNavigator>
        <DashboardNavigatorButton>Reading</DashboardNavigatorButton>
        <DashboardNavigatorButton>Math</DashboardNavigatorButton>
        <DashboardNavigatorButton>Coding</DashboardNavigatorButton>
        <DashboardNavigatorButtonClicked>Science</DashboardNavigatorButtonClicked>
    </DashboardNavigator>
  )
}
