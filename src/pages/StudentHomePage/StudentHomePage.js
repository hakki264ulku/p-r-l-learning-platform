import React,{useEffect} from 'react'
import { StudentDashboard } from '../../components/StudentDashboard/StudentDashboard';
import { StudentMenu } from '../../components/StudentMenu/StudentMenu';
import {MainContainer} from './StudentHomePageStyles'

 const StudentHomePage= ({title})=> {
    useEffect(() => {
        document.title = title
     });
    return (
        <MainContainer> 
            <StudentMenu />
            <StudentDashboard />
        </MainContainer> 
    )
}
export default StudentHomePage