import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { StudentMenu } from "../../components/StudentMenu/StudentMenu";
import {
  CardContainer,
  CardImage,
  CardTitle,
  Container,
  ContentContainer,
  ContentsContainer,
  Title,
} from "./3dContentsPageStyles";
import gameConfig from "../3dContentPage/gameConfig";

export const ThreeDContentsPage = () => {
  const menu = useSelector((state) => state.menu);
  const history = useHistory();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      history.push("/login");
    }
  });

  const [title, setTitle] = useState("3D Content");

  useEffect(() => {
    for (const m of menu.data) {
      if (m.isClicked) {
        setTitle(m.text);
      }
    }
  }, [title, menu]);

  const handleClick = (id) => {
    history.push(`/student/3dcontent/content?id=${id}`);
  };

  return (
    <Container>
      <Title>{title}</Title>

      <ContentContainer>
        <StudentMenu />
        <ContentsContainer>
          {gameConfig.games.map((game) => (
            <CardContainer onClick={() => handleClick(game.id)}>
              <CardTitle>{game.title}</CardTitle>
              <CardImage src={game.imagePath} />
            </CardContainer>
          ))}
        </ContentsContainer>
      </ContentContainer>
    </Container>
  );
};
