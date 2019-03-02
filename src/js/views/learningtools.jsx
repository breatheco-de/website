import React from "react";
import { Jumbotron } from "../component/jumbotron.jsx";
import PropTypes from "prop-types";

export class LearningTools extends React.Component {
	constructor() {
		super();
		this.state = {
			toolCards: [
				{
					icon: "fas fa-terminal fa-5x",
					title: "BreatheCode CLI",
					description:
						"Command Line interface to connect with lots of useful stuff like access to boilerplates, exercises, builders, etc",
					subtTitle: "Technologies",
					technologies: ["Node.js", "Bash", "JSON"]
				},
				{
					icon: "fas fa-cloud fa-5x",
					title: "C9 Plugin",
					description:
						"Cloud 9 is a great IDE for junior developers because it allows you to work with very few configurations on an isolated machine. We have created a plugin to enhance the Cloud 9 coding IDE as well as the integragtion with all the other BreatheCode projects.",
					subtTitle: "Technologies",
					technologies: ["Node.js", "Bash", "JSON"]
				}
			],
			apisCards: [
				{
					icon: "fas fa-user-graduate fa-5x",
					title: "Platform API",
					description:
						"The API for the LMS, it manages students, courses, etc.",
					subtTitle: "Technologies",
					technologies: [
						"EloquentORM",
						"Bash",
						"PHP",
						"SlimPHP",
						"MySQL",
						"JSON",
						"REST"
					]
				},
				{
					icon: "fas fa-file-alt fa-5x",
					title: "Assets API",
					description:
						"Amazing resources for students (infographics, lessons, cheat-sheets, mock api's, etc).",
					subtTitle: "Technologies",
					technologies: [
						"Markdown",
						"PHP",
						"MySQL",
						"SQLite",
						"SlimPHP",
						"REST",
						"Static Files"
					]
				}
			],
			libraries: [
				{
					icon: "fas fa-file-alt fa-5x",
					title: "Assets API",
					description:
						"Amazing resources for students (infographics, lessons, cheat-sheets, mock api's, etc).",
					subtTitle: "Technologies",
					technologies: [
						"Markdown",
						"PHP",
						"MySQL",
						"SQLite",
						"SlimPHP",
						"REST",
						"Static Files"
					]
				},
				{
					icon: "fas fa-file-alt fa-5x",
					title: "Assets API",
					description:
						"Amazing resources for students (infographics, lessons, cheat-sheets, mock api's, etc).",
					subtTitle: "Technologies",
					technologies: [
						"Markdown",
						"PHP",
						"MySQL",
						"SQLite",
						"SlimPHP",
						"REST",
						"Static Files"
					]
				},
				{
					icon: "fas fa-file-alt fa-5x",
					title: "Assets API",
					description:
						"Amazing resources for students (infographics, lessons, cheat-sheets, mock api's, etc).",
					subtTitle: "Technologies",
					technologies: [
						"Markdown",
						"PHP",
						"MySQL",
						"SQLite",
						"SlimPHP",
						"REST",
						"Static Files"
					]
				},
				{
					icon: "fas fa-file-alt fa-5x",
					title: "Assets API",
					description:
						"Amazing resources for students (infographics, lessons, cheat-sheets, mock api's, etc).",
					subtTitle: "Technologies",
					technologies: [
						"Markdown",
						"PHP",
						"MySQL",
						"SQLite",
						"SlimPHP",
						"REST",
						"Static Files"
					]
				}
			]
		};
	}
	render() {
		return (
			<div>
				<Jumbotron
					jumbotronClass="jumbotron jumbotron-fluid mb-0"
					title="Learning Tools"
					firstContainerClass="container d-flex justify-content-center"
					headerClass="display-4"
				/>
				<div className="container-fluid">
					<div className="row">
						<Titles title="tools" />
					</div>
					<div className="row">
						<div className="col-12 col-md-6 d-flex justify-content-center" />
					</div>
				</div>
			</div>
		);
	}
}

class Titles extends React.Component {
	render() {
		return (
			<div className="col-12 d-flex justify-content-center">
				<h2 className="display-4 heading-tools">{this.props.title}</h2>
			</div>
		);
	}
}

Titles.propTypes = {
	title: PropTypes.string
};
