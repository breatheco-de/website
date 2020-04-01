import React from "react";
import { Link } from "gatsby";
import withLocation from "./withLocation";

class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			change: false,

		};
	}




	render() {
        const { pageContext, search } = this.props;
        const fromIframe = (search.iframe === 'true');

		return (
				<nav className="navbar navbar-expand-lg navbar-light bg-light gradient">
					<Link to="/">
						<img
							className="navbar-brand mb-0"
							src="https://ucarecdn.com/dbe55247-376b-4b81-988e-7dd95f4233b5/-/resize/45x/"
						/>
					</Link>
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

					<div
						className={`navbar-collapse collapse ${this.state.change && "show"}`}
						id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto text-center">
							<li className="nav-item mt-3 ">
								<Link to="/aboutus" className="nav-link">
									<p className={`nav-link ${this.state.change && "border-bottom"}`}>
										About Us
									</p>
								</Link>
							</li>
							<li className="nav-item mt-3">
								<Link to="/interactive-exercises" className="nav-link">
									<p className={`nav-link ${this.state.change && "border-bottom"}`} >
										Practice
									</p>
								</Link>
							</li>
							<li className="nav-item mt-3">
								<Link to="/lessons" className="nav-link">
									<p className={`nav-link ${this.state.change && "border-bottom"}`} >
										Read
									</p>
								</Link>
							</li>
							<li className="nav-item mt-3">
								<a href="https://projects.breatheco.de" className="nav-link">
									<p className={`nav-link ${this.state.change && "border-bottom"}`} >
										Build
									</p>
								</a>
							</li>
							<li className="nav-item mt-3">
								<Link to="/assets" className="nav-link">
									<p className={`nav-link ${this.state.change && "border-bottom"}`} >
										Assets
									</p>
								</Link>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0  d-flex justify-content-center">
							<Link to="/contributing" className="nav-link btn btn-outline-success buttonHeight mr-2">
                                Contribute
							</Link>
							<a
								className="btn btn-outline-primary buttonHeight  px-5"

								href="https://student.breatheco.de/login"
							>login</a>
						</form>
					</div>
				</nav>
		);
	}
}

export default withLocation(Navbar)