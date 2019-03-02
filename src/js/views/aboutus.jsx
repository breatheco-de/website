import React from "react";
import { Jumbotron } from "../component/jumbotron.jsx";

export class AboutUs extends React.Component {
	constructor() {
		super();
		this.state = {
			colContent: [
				"• Use the best tools: Training on industry's top tools & programs.",
				"• Research & study the most game-changing tech: AI, Big Data & Machine Learning.",
				"• Learn code & new technologies: Everyone needs or will need coding skills. ",
				"• Trending web technologies like Javascript, React JS, Node JS, etc. "
			]
		};
	}
	render() {
		return (
			<div>
				<Jumbotron
					jumbotronClass="jumbotron jumbotron-fluid mb-0"
					fistContainerClass="container-fluid"
					headerClass="display-2 text-center"
					title="About Us"
				/>

				<Jumbotron
					jumbotronClass="jumbotron jumbotron-fluid pt-0 pb-0 text-center bg-white"
					fistContainerClass="container"
					headerClass=""
					imgClass="rounded mx-auto d-block"
					imgSrc="https://ucarecdn.com/5002577b-749e-4fc7-b206-0ccf9b100426/-/resize/150x/"
					title="Who We Are..."
					subheading="BreatheCode's is a non-profit with the mission to accelerate the way junior developers learn and evolve using technology."
				/>
				<Jumbotron
					jumbotronClass="jumbotron jumbotron-fluid"
					fistContainerClass="container-fluid text-left"
					title="Here We Live and Breathe Code"
					subheading="Its our passion and our life, its what moves our world"
				/>
				<Jumbotron
					jumbotronClass="jumbotron jumbotron-fluid pt-0 pb-0 text-center bg-white"
					firstContainerClass="container"
					iconClass="far fa-lightbulb fa-4x"
					title="What We Do ..."
					subheading="Face-to-face training, talks & research in coding related areas:"
					rowContainer="container"
					rowClass="row"
					colContent={this.state.colContent}
				/>
			</div>
		);
	}
}
