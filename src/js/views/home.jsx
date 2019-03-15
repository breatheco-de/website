import React from "react";
import { Link } from "react-router-dom";

import { Jumbotron } from "../component/jumbotron.jsx";
import "../../styles/home.css";
import { Dropdown } from "../component/dropdowns.jsx";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			change: false,
			change1: false,
			change2: false,
			change3: false,
			change4: false,
			change5: false
		};
	}
	render() {
		return (
			<div>
				<Jumbotron
					jumbotronClass="jumbotron jumbotron-fluid  mb-0 text-center homeJumbo"
					title="&lt;BreatheCode&gt;"
					subheading="&lt;/We are a non-profit with the mission, to
							accelerate the way junior developers learn and
							evolve using technology.&gt;"
					leftButton="&lt; Join our community /&gt;"
					rightButton="&lt; Start Learning /&gt;"
					btnClass="btn btn btnColor d-flex  text-light rounded mx-1 my-1"
				/>
				<nav className="nav flex-column d-block d-md-none flex-col ll">
					<Dropdown />
				</nav>

				<div className="d-none d-md-block">
					<div className="d-flex justify-content-between bg-light  sticky-top">
						<nav className="container navbar navbar-expand-md navbar-light sticky">
							<ul className="navbar-nav pt-1">
								<li className="nav-item">
									<a className="nav-link" href="#">
										Learn The Plataform
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#ltp">
										The Basics of the web
									</a>
								</li>

								<li className="nav-item">
									<a className="nav-link" href="#ltc">
										Learning to Code
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#front">
										Front-End Web Development
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#back">
										Back-End Web Development
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#build">
										Building Web Apps
									</a>
								</li>
							</ul>
						</nav>
					</div>

					<div className="container">
						<div className="row border-bottom">
							<div className="col-3">
								<i
									className="fas fa-apple-alt fa-2x blueB"
									id="ltp">
									&nbsp;
								</i>
								Learn The Platform
							</div>
							<div className="col-3">
								<a>Submit a quiz</a>
								<br />
							</div>
							<div className="col-3">
								<a>Submit a project</a>
								<br />
							</div>
							<div className="col-3">
								<a>Upload your replit classes</a>
							</div>
						</div>
						<div className="row border-bottom">
							<div className="col-3">
								<i
									className="far fa-window-maximize fa-2x blueM"
									id="ltc">
									&nbsp;
								</i>
								The basics of the web
							</div>
							<div className="col-3">
								<a>Intro to Pre-Work</a>
								<br />
								<a>Internet Architecture</a>
								<br />
								<a>HTML Forms</a>
								<br />
							</div>
							<div className="col-3">
								<a>So, yes… HTML!</a>
								<br />
								<a>Now it&apos;s CSS Time!</a>
								<br />
								<a>Getting to know Bootstrap 4</a>
							</div>
							<div className="col-3">
								<a>Mastering CSS Selectors</a>
								<br />
								<a>Create and Build Layouts</a>
								<br />
							</div>
						</div>
						<div className="row border-bottom">
							<div className="col-3">
								<i
									className="fas fa-code fa-2x yellowY"
									id="front">
									&nbsp;
								</i>{" "}
								Learning to Code
							</div>
							<div className="col-3">
								<a>Introduction</a>
								<br />
								<a>Learn GIT</a>
								<br />
							</div>
							<div className="col-3">
								<a>The Command Line</a>
								<br />
								<a>Learn to Code in JavaScript</a>
								<br />
							</div>
							<div className="col-3">
								<a>Working with Arrays</a>
								<br />
								<a>Regular Expressions</a>
								<br />
							</div>
						</div>
						<div className="row border-bottom">
							<div className="col-3">
								<i className="fas fa-eye fa-2x blueB" id="back">
									&nbsp;
								</i>
								Front-End Web Development
							</div>
							<div className="col-3">
								<a>Introduction</a>
								<br />
								<a>AJAX</a>
								<br />
							</div>
							<div className="col-3">
								<a>The DOM</a>
								<br />
								<a>From JS to jQuery</a>
								<br />
							</div>
							<div className="col-3">
								<a>Events</a>
								<br />
							</div>
						</div>
						<div className="row border-bottom">
							<div className="col-3">
								<i
									className="fas fa-server fa-2x greenB"
									id="build">
									&nbsp;
								</i>
								Back-End Web Development
							</div>
							<div className="col-3">
								<a>Intro to Back-End</a>
								<br />
								<a>From Javascript to Python</a>
								<br />
								<a>Undersanding Server Sessions</a>
								<br />
							</div>
							<div className="col-3">
								<a>From Javascript to PHP</a>
								<br />
								<a>Object Oriented Programming</a>
								<br />
							</div>
							<div className="col-3">
								<a>Understanding API&apos;s</a>
								<br />
								<a>Relational Databases</a>
								<br />
							</div>
						</div>
						<div className="row border-bottom">
							<div className="col-3">
								<i className="fas fa-rocket fa-2x greenG">
									&nbsp;
								</i>
								Building Web Apps
							</div>
							<div className="col-3">
								<a>Professional Web Development</a>
								<br />
								<a>Creating User Stories</a>
								<br />
							</div>
							<div className="col-3">
								<a>Bundling with Webpack</a>
								<br />
								<a>Creating interfaces with ReactJS</a>
								<br />
							</div>
							<div className="col-3">
								<a>Working with Arrays</a>
								<br />
								<a>Regular Expressions</a>
								<br />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
