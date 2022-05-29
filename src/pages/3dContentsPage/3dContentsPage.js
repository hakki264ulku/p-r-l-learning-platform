import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StudentMenu } from '../../components/StudentMenu/StudentMenu'
import { CardContainer, CardImage, CardTitle, Container, ContentContainer, ContentsContainer, Title } from './3dContentsPageStyles'

export const ThreeDContentsPage = () => {
    const menu = useSelector(state => state.menu)

    const [title, setTitle] = useState("3D Content")

    useEffect(() => {

        for (const m of menu.data) {
            if (m.isClicked) {
                setTitle(m.text)
            }
        }

    })


    return (
        <Container>
            <Title>{title}</Title>

            <ContentContainer>
                <StudentMenu />
                <ContentsContainer>

                    <CardContainer>
                        <CardTitle>Card Title</CardTitle>
                        <CardImage src='https://picsum.photos/id/227/200/150' />
                    </CardContainer>

                    <CardContainer>
                        <CardTitle>Card Title</CardTitle>
                        <CardImage src='https://picsum.photos/id/227/200/150' />
                    </CardContainer>

                    <CardContainer>
                        <CardTitle>Card Title</CardTitle>
                        <CardImage src='https://picsum.photos/id/227/200/150' />
                    </CardContainer>

                    <CardContainer>
                        <CardTitle>Card Title</CardTitle>
                        <CardImage src='https://picsum.photos/id/227/200/150' />
                    </CardContainer>

                    <CardContainer>
                        <CardTitle>Card Title</CardTitle>
                        <CardImage src='https://picsum.photos/id/227/200/150' />
                    </CardContainer>

                    <CardContainer>
                        <CardTitle>Card Title</CardTitle>
                        <CardImage src='https://picsum.photos/id/227/200/150' />
                    </CardContainer>

                    <CardContainer>
                        <CardTitle>Card Title</CardTitle>
                        <CardImage src='https://picsum.photos/id/227/200/150' />
                    </CardContainer>

                    <CardContainer>
                        <CardTitle>Card Title</CardTitle>
                        <CardImage src='https://picsum.photos/id/227/200/150' />
                    </CardContainer>

                </ContentsContainer>

            </ContentContainer>
        </Container>
    )
}
