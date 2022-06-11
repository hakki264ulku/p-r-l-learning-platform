import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Container, ContentContainer, Title } from './3dContentPageStyles'

export const ThreeDContentPage = () => {
  const history = useHistory()
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      history.push("/login")
    }
  });

  return (
    <Container>
      <Title>Content Name</Title>
      <ContentContainer>

      </ContentContainer>
    </Container>
  )
}
