import React from "react";
import PropTypes from "prop-types";
import { DropdownItem } from "./dropdowns.jsx";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			change: false,
			change2: false,
			changeSearch: false,
			dropdownsItems: [
				{
					pClass: "border-bottom mb-0 parragraphs1 dropdown-toggle",
					numbers: "dropdown-menu numbers",
					boldDescription:
						"Get amazing projects assign to your students, create Quizes for student self assessment, sync your repl.it classes, integrate with slack and cloud 9 for better teaching, etc.",
					heading: "Learn The BreatheCode Platform",
					listItems: [
						"Submit a quiz",
						"Submit a project",
						"Upload your Replit Classes"
					]
				},
				{
					pClass: "border-bottom mb-0 parragraphs1 dropdown-toggle",
					numbers: "dropdown-menu numbers",
					boldDescription:
						"The foundation of the web: Get introduced to the world of web development, learn HTML, CSS, Layout and Bootstrap. At the end of the course you will be able to create static websites.",
					heading: "The Basics of the Web",
					listItems: [
						"Internet Architecture",
						"So, yes… HTML!",
						"Now it's CSS Time!",
						"Mastering CSS Selectors",
						" Create and Build Layouts ",
						"Getting to know Bootstrap 4"
					]
				},
				{
					pClass: "border-bottom mb-0 parragraphs1 dropdown-toggle",
					numbers: "dropdown-menu numbers",
					boldDescription:
						"Coding is like Mexican food, 6 ingredients that you mix on every algorithm: Loops, Conditionals, Logical Operations, etc. Learn the tricks get ready to be called a “Junior Developer” for the first time.",
					heading: "Learning to Code",
					listItems: [
						"Introduction",
						"Learn GIT",
						"The Command Line",
						"Learn to Code in JavaScript",
						"Working with Arrays ",
						"Regular Expressions"
					]
				},
				{
					pClass: "border-bottom mb-0 parragraphs1 dropdown-toggle",
					numbers: "dropdown-menu numbers",
					boldDescription:
						"Create your first dynamic websites and games: Understand how browsers work and combine Javascript+CSS+HTML to update the website without refreshing it",
					heading: "Front-End Web Development",
					listItems: [
						"The DOM",
						"Events",
						"AJAX",
						"From JS to jQuery"
					]
				},
				{
					pClass: "border-bottom mb-0 parragraphs1 dropdown-toggle",
					numbers: "dropdown-menu numbers",
					boldDescription:
						"Learn how to connect to a database, retrieve and store information using SQL, creating dynamic documents using PHP, object oriented programming, server configuration and more.",
					heading: "Back-End Web Development",
					listItems: [
						"Intro to Back-End",
						"From Javascript to Python",
						"From Javascript to PHP",
						"Object Oriented Programming",
						"Understanding API's",
						"Relational Databases",
						"Undersanding Server Sessions"
					]
				},
				{
					pClass: "border-bottom mb-0 parragraphs1 dropdown-toggle",
					numbers: "dropdown-menu numbers",
					boldDescription:
						"Graduation day! Use all the previous knowledge and skills combined to develop your first real life web application: User Stories, Wire-framing, React.js & Django.",
					heading: "Building Web Apps",
					listItems: [
						"Professional Web Development",
						"Creating User Stories",
						"Bundling with Webpack",
						"Creating interfaces with ReactJS",
						"Using the Flux Architecture",
						"Building RESTful APIs With Django"
					]
				}
			]
		};
	}

	render() {
		return (
			<div>
				<div className="d-none d-md-block">
					<nav className="navbar navbar-expand-sm navbar-light bg-light">
						<div className="container-fluid">
							<div className="row w-100 p-0">
								<div className="col-4 position-relative bottom">
									<div
										className="collapse navbar-collapse d-flex justify-content-start position-absolute"
										id="navbarNavAltMarkup">
										<div className="navbar-nav">
											<Link to="/" className="nav-link">
												<a
													className="nav-item nav-link"
													href="./home.html">
													Learn
												</a>
											</Link>
											<Link
												to="/learning-tools"
												className="nav-link">
												<a className="nav-item nav-link">
													Collaborate
												</a>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-4 d-flex justify-content-center">
									<a className="navbar-brand" href="#">
										<Link to="/" className="nav-link">
											<img
												src="https://ucarecdn.com/dbe55247-376b-4b81-988e-7dd95f4233b5/-/resize/45x/"
												className="img-fluid"
												alt="Responsive image"
											/>
										</Link>
									</a>
								</div>
								<div className="col-4 bottom">
									<div
										className="collapse navbar-collapse d-flex justify-content-end"
										id="navbarNavAltMarkup">
										<div className="navbar-nav">
											<Link
												to="/about-us"
												className="nav-link">
												<a className="nav-item nav-link">
													About Us
												</a>
											</Link>
											<Link
												to="https://student.breatheco.de/login"
												className="nav-link">
												<a
													className="nav-item nav-link"
													href="#">
													Logg in
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>

				<nav className="navbar navbar-expand-xl navbar-light bg-light p-0 d-block d-md-none">
					<div className="container-fluid p-2">
						<a className="navbar-brand" href="#">
							<Link to="/" className="nav-link">
								<img
									src="https://ucarecdn.com/dbe55247-376b-4b81-988e-7dd95f4233b5/-/resize/45x/"
									className="img-fluid"
									alt="Responsive image"
								/>
							</Link>
						</a>
						<div className="buttons p-15">
							<button
								className="btn btn blueBC mr-1 text-white"
								type="button"
								data-toggle="collapse"
								data-target="#collapseExample"
								aria-expanded={
									this.state.changeSearch ? "true" : "false"
								}
								onClick={() =>
									this.setState({
										changeSearch: !this.state.changeSearch
									})
								}
								aria-controls="collapseExample">
								<i className="fas fa-search" />
							</button>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
								onClick={() => {
									this.setState({
										change: !this.state.change
									});
								}}>
								<span className="navbar-toggler-icon" />
							</button>
						</div>
					</div>
					<div
						className={`collapse ${this.state.changeSearch &&
							"show"}`}
						id="collapseExample">
						<div className="input-group justify-content-center input">
							<input
								className="form-control border border-light"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<div className="input-group-append">
								<button
									className="btn btn-outline-success mr-2  my-2 my-sm-0 input-group-text"
									id="basic-addon2"
									type="submit">
									Search
								</button>
							</div>
						</div>
					</div>

					<div
						className={`collapse navbar-collapse p-0 mobile ${this
							.state.change && "show"}`}
						id="navbarSupportedContent">
						<div className="container-fluid">
							<div className="row blueRow p-2 text-light">
								<div className="col-12 d-flex d-flex justify-content-around">
									<a>
										<strong>Login</strong>
									</a>
									<a>
										<strong>Sign up</strong>
									</a>
								</div>
							</div>
						</div>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link to="/learning-tools" className="nav-link">
									<a className="nav-link border-bottom">
										Collaborate
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/about-us" className="nav-link">
									<a className="nav-link border-bottom">
										About Us
									</a>
								</Link>
							</li>
							<Link to="/" className="nav-link">
								<li className="nav-item">
									<span>Learn</span>
								</li>
							</Link>
							<div className="courses">
								{this.state.dropdownsItems.map(
									(element, index) => {
										return (
											<DropdownItem
												key={index}
												pClass={element.pClass}
												numbers={element.numbers}
												heading={element.heading}
												listItems={element.listItems}
												boldDescription={
													element.boldDescription
												}
											/>
										);
									}
								)}
							</div>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

Navbar.propTypes = {
	heading: PropTypes.string,
	dropdownsItems: PropTypes.array,
	listItems: PropTypes.array,
	boldDescription: PropTypes.string,
	numbers: PropTypes.string,
	pClass: PropTypes.string
};
