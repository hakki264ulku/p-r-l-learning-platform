import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { StudentDashboard } from "../../components/StudentDashboard/StudentDashboard";
import { StudentMenu } from "../../components/StudentMenu/StudentMenu";
import { Dropdown } from "../../components/StudentMenu/StudentMenuStyles";
import { MainContainer, StudentDashboardBorder } from "./StudentHomePageStyles";

const StudentHomePage = ({ title }) => {
	const history = useHistory();
	useEffect(() => {
		const isAuthenticated = localStorage.getItem("isAuthenticated");
		if (!isAuthenticated) {
			history.push("/login");
		}
	});

	useEffect(() => {
		document.title = title;
	});
	return (
		<MainContainer>
			<StudentMenu />
			<StudentDashboard />
		</MainContainer>
	);
};
export default StudentHomePage;
