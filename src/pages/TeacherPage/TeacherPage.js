import React from 'react'
import Breadcrumb from '../../components/breadcrumb/breadcrumb'
import TeacherComponent from '../../components/Teacher/Teacher'
import Teacher1 from '../../components/Teacher1/Teacher1'

 const TeacherPage = ({title})=> {
    return (
        <>
        <Breadcrumb title={title}/>
        <div className="page__teacher__wrapper"> 
            <Teacher1 />
            <TeacherComponent />
        </div>
        </> 
    )
}
export default TeacherPage