import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StudentMenu } from '../../components/StudentMenu/StudentMenu'
import { Container, ContentContainer, Title } from './3dContentPageStyles'

export const ThreeDContentPage = () => {
    const menu = useSelector(state=>state.menu)

    const [title, setTitle] = useState("3D Content")

    useEffect(() => {

        for (const m of menu.data) {
            if(m.isClicked){
                setTitle(m.text)
            }
        }

    })


    return (
        <Container>
            <Title>{title}</Title>

            <ContentContainer>
                <StudentMenu />

            </ContentContainer>
        </Container>
    )
}
