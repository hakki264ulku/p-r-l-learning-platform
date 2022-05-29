import React from 'react'
import { MainContainer } from './StudentMenuStyles'
import { StudentMenuButton } from './StudentMenuButton'

export const StudentMenu = () => {
    return (
        <MainContainer>
            <StudentMenuButton isClicked={true} text="Home Page" />
            <StudentMenuButton isClicked={false} text="Reading" />
            <StudentMenuButton isClicked={false} text="Math" />
            <StudentMenuButton isClicked={false} text="Coding" />
            <StudentMenuButton isClicked={false} text="English" />
            <StudentMenuButton isClicked={false} text="Science" />
        </MainContainer>
    )
}
