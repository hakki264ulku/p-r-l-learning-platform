import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Link } from "react-router-dom";
import cto from "../../assets/images/arup.png";
import ceo3 from "../../assets/images/boruya.png";
import marketing from "../../assets/images/devil.png";
import ceo from "../../assets/images/devilroy.png";
import seo from "../../assets/images/hayder.png";
import manager from "../../assets/images/islam.png";
import ceo1 from "../../assets/images/politkans.png";
import ceo2 from "../../assets/images/roy.png";
const Teacher = () => {
	const teachers = [
		{
			src: ceo,
			name: "Devil Roy Barman",
			title: "CEO",
		},
		{
			src: cto,
			name: "Arup Barman",
			title: "CTO",
		},
		{
			src: ceo1,
			name: "Politkans",
			title: "CEO",
		},
		{
			src: manager,
			name: "Saiful Islam",
			title: "Manager",
		},
		{
			src: seo,
			name: "Munir Hayder",
			title: "SEO",
		},
		{
			src: ceo2,
			name: "Pritom Roy",
			title: "CEO",
		},
		{
			src: marketing,
			name: "Devil Roy Barman",
			title: "Marketing",
		},
		{
			src: ceo3,
			name: "Nishad Boruya",
			title: "CEO",
		},
	];
	return (
		<div className="teacher__wrapper padding__bottom">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-4 mx-auto ">
						<div className="section__title__container text-center">
							<h5 className="section__subtitle">Together We Can Create</h5>
							<h2 className="section__title">Who Stand By Your Kids Always</h2>
							<p className="section__contnet section__margin__bottom">
								While the unit economics were a driving factor, the company says
								its acquisition of lidar company Blackmore and the integration
								of that tech in its self-driving stack has made the shift to
								trucks possible. Aurora has said its FirstLight.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					{teachers.map((teacher, i) => (
						<div className="col-lg-4 col-xl-3" key={i}>
							<div className="teacher__single">
								<div className="teacher__img">
									<img
										src={teacher.src}
										className="img-fluid"
										alt={teacher.title}
									/>
								</div>
								<div className="teacher__content">
									<div className="teacher__content__in">
										<h5>{teacher.name}</h5>
										<h6>{teacher.title}</h6>
										<div className="teacher__social__wrapper">
											<ul className="teacher__social">
												<li>
													<a href="https://www.facebook.com/trtcocukpiril/">
														<FontAwesomeIcon icon={["fab", "facebook-f"]} />
													</a>
												</li>
												<li>
													<a href="https://twitter.com/trtcocukpiril">
														<FontAwesomeIcon icon={["fab", "twitter"]} />
													</a>
												</li>
												<li>
													<a href="https://www.instagram.com/trtcocukpiril/">
														<FontAwesomeIcon icon={["fab", "instagram"]} />
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="more__teacher text-center">
							<Router>
								<Link to="/moreproject" className="teacher__quali">
									With 20+ Qualified Teacher?​
								</Link>
							</Router>
							<Router>
								<Link to="/moreproject" className="teacher__btn">
									View All Here
									<FontAwesomeIcon icon="caret-right" />
								</Link>
							</Router>
							<Router>
								<Link to="/moreproject" className="teacher__car">
									Careers
								</Link>
							</Router>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Teacher;
