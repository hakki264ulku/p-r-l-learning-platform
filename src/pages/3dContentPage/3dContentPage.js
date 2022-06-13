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

export const ThreeDContentPage = () => {
	const history = useHistory();
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
					<Title>Content Name</Title>
				</Nav>
			</NavBorder>

			<ContentContainerBox>
				<ContentContainer>
					<Game />
				</ContentContainer>
			</ContentContainerBox>
		</Container>
	);
};
