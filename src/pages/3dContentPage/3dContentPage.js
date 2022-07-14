import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Container,
  ContentContainer,
  ContentContainerBox,
  Nav,
  NavBorder,
  Title,
} from "./3dContentPageStyles";
import { Game } from "./Game";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import config from "./gameConfig";

export const ThreeDContentPage = () => {
  const history = useHistory();
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const game = config.games.filter((game) => game.id === id)[0];
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      history.push("/login");
    }
  });

  return (
    <Container>
      <NavBorder>
        <Nav>
          <Button onClick={() => history.goBack()}>
            <ArrowBackIosNewIcon fontSize="large" />
          </Button>
          <Title>{game.title}</Title>
        </Nav>
      </NavBorder>

      <ContentContainerBox>
        <ContentContainer>
          <Game gameConfig={game} />
        </ContentContainer>
      </ContentContainerBox>
    </Container>
  );
};
