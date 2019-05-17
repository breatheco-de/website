import React, { Component } from "react";
import Store from "../store/appContext.jsx";


export class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer gradientFooter">
					<div className="container pt-5">
						<div className="row">
							<div className="col-12 text-center"><a className="text-secondary" href="mailto:info@breatheco.de">Contact Us</a></div>
						</div>
						<div className="row text-center">
							<div className="col-12">
								© {new Date().getFullYear()}, Built By
            {` `}
            <a href="https://www.breatheco.de">BreatheCode</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Store(Footer)