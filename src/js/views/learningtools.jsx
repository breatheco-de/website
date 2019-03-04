import React from "react";
import { Jumbotron } from "../component/jumbotron.jsx";
import PropTypes from "prop-types";
import { Cards } from "../component/cards.jsx";

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
					icon: "fab fa-react fa-5x",
					title: "React Session",
					description:
						"Allows persistent sessions in react, compatible with react router.",
					subtTitle: "Technologies",
					technologies: ["React.js"]
				},
				{
					icon: "fab fa-react fa-5x",
					title: "React Notifier",
					description: "Notification library for React Applications.",
					subtTitle: "Technologies",
					technologies: ["React.js"]
				},
				{
					icon: "fab fa-react fa-5x",
					title: "React Flux Dash",
					description: "Flux implementation for React.js",
					subtTitle: "Technologies",
					technologies: ["React.js"]
				}
			],
			applications: [
				{
					icon: "fas fa-sitemap fa-5x",
					title: "CMS",
					description:
						"This is were most of the community content is being published: Lessons, Error Explanations and &quot;How to&apos;s&quot;.",
					subtTitle: "Technologies",
					technologies: ["React.js", "Gatsby.js", "CSS", "Markdown"]
				},
				{
					icon: "fas fa-home fa-5x",
					title: "Student Web Client",
					description:
						"BreatheCode's main website for displaying the courses.",
					subtTitle: "Technologies",
					technologies: ["React.js", "CSS", "Sass", "HTML"]
				},
				{
					icon: "fas fa-chalkboard-teacher fa-5x",
					title: "Teacher Web Client",
					description:
						"Teachers are able to manage the pace of their cohorts, review students deliverables, etc.",
					subtTitle: "Technologies",
					technologies: ["React.js", "CSS", "Sass", "HTML"]
				},
				{
					icon: "fas fa-users fa-5x",
					title: "Admin Web Client",
					description: "Manage BreathCode students, teachers, etc.",
					subtTitle: "Technologies",
					technologies: ["React.js", "CSS", "Sass", "HTML"]
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
						<Titles title="Tools" />
					</div>
					<div className="row">
						{this.state.toolCards.map((element, index) => {
							return (
								<div
									key={index}
									className="col-12 col-md-6 d-flex justify-content-center">
									<Cards
										iconClass={element.icon}
										title={element.title}
										cardText={element.description}
										subtitle={element.subTitle}
										technologies={element.technologies}
									/>
								</div>
							);
						})}
					</div>

					<div className="row">
						<Titles title="API'S" />
					</div>
					<div className="row">
						{this.state.apisCards.map((element, index) => {
							return (
								<div
									key={index}
									className="col-12 col-md-6 d-flex justify-content-center">
									<Cards
										iconClass={element.icon}
										title={element.title}
										cardText={element.description}
										subtitle={element.subTitle}
										technologies={element.technologies}
									/>
								</div>
							);
						})}
					</div>
					<div className="row">
						<Titles title="Libraries" />
					</div>
					<div className="row">
						{this.state.libraries.map((element, index) => {
							return (
								<div
									key={index}
									className="col-12 col-md-4 d-flex justify-content-center">
									<Cards
										iconClass={element.icon}
										title={element.title}
										cardText={element.description}
										subtitle={element.subTitle}
										technologies={element.technologies}
									/>
								</div>
							);
						})}
					</div>
					<div className="row">
						<Titles title="Applications" />
					</div>
					<div className="row">
						{this.state.applications.map((element, index) => {
							return (
								<div
									key={index}
									className="col-12 col-md-3 d-flex justify-content-center">
									<Cards
										iconClass={element.icon}
										title={element.title}
										cardText={element.description}
										subtitle={element.subTitle}
										technologies={element.technologies}
									/>
								</div>
							);
						})}
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
