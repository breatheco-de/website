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
					cardClass: "card bg-light w-100 h-100 ",
					icon:
						"fas fa-terminal fa-7x d-flex justify-content-center pt-3 learningGreen",
					title: "BreatheCode CLI ",
					description:
						"Command Line interface to connect with lots of useful stuff like access to boilerplates, exercises, builders, etc",
					technologies: [
						{
							tech: "Nodejs",
							color: "col-1.5 px-3 rounded tagsCol1"
						},
						{
							tech: "Bash",
							color: "col-1.5 px-3 rounded tagsCol2"
						},
						{
							tech: "JSON",
							color: "col-1.5 px-3 rounded tagsCol3"
						}
					]
				},
				{
					cardClass: "card bg-light w-100 h-100",
					icon:
						"fas fa-cloud fa-7x d-flex justify-content-center pt-3 blueB",
					title: "C9 Plugin",
					description:
						"Cloud 9 is a great IDE for junior developers because it allows you to work with very few configurations on an isolated machine. We have created a plugin to enhance the Cloud 9 coding IDE as well as the integragtion with all the other BreatheCode projects.",
					technologies: [
						{
							tech: "Nodejs",
							color: "col-1.5 px-3 rounded tagsCol1"
						},
						{
							tech: "Bash",
							color: "col-1.5 px-3 rounded tagsCol2"
						},
						{
							tech: "JSON",
							color: "col-1.5 px-3 rounded tagsCol3"
						}
					]
				}
			],
			apisCards: [
				{
					cardClass: "card bg-light w-100 h-100",
					icon:
						"fas fa-user-graduate fa-7x d-flex justify-content-center pt-3 learningGreen",
					title: "Platform API",
					description:
						"The API for the LMS, it manages students, courses, etc.",
					subtTitle: "Technologies",

					technologies: [
						{
							tech: "EloquentCRM",
							color: "col-1.5 px-3 rounded tagsCol1"
						},
						{
							tech: "Bash",
							color: "col-1.5 px-3 rounded tagsCol2"
						},
						{
							tech: "PHP",
							color: "col-1.5 px-3 rounded tagsCol3"
						},
						{
							tech: "SlimPHP",
							color: "col-1.5 px-3 rounded tagsCol4"
						},
						{
							tech: "MySQL",
							color: "col-1.5 px-3 rounded tagsCol1"
						},
						{
							tech: "JSON",
							color: "col-1.5 px-3 rounded tagsCol2"
						},
						{
							tech: "REST",
							color: "col-1.5 px-3 rounded tagsCol3"
						}
					]
				},
				{
					cardClass: "card bg-light w-100 h-100 ",
					icon:
						"fas fa-file-alt fa-7x d-flex justify-content-center pt-3 blueB",
					title: "Assets API",
					description:
						"Amazing resources for students (infographics, lessons, cheat-sheets, mock api's, etc).",
					technologies: [
						{
							tech: "Markdown",
							color: "col-1.5 px-3 rounded tagsCol1"
						},
						{
							tech: "PHP",
							color: "col-1.5 px-3 rounded tagsCol2"
						},
						{
							tech: "MySQL",
							color: "col-1.5 px-3 rounded tagsCol3"
						},
						{
							tech: "SQLite",
							color: "col-1.5 px-3 rounded tagsCol4"
						},
						{
							tech: "SlimPHP",
							color: "col-1.5 px-3 rounded tagsCol1"
						},
						{
							tech: "Static Files",
							color: "col-1.5 px-3 rounded tagsCol2"
						},
						{
							tech: "REST",
							color: "col-1.5 px-3 rounded tagsCol3"
						}
					]
				}
			],
			libraries: [
				{
					cardClass: "card bg-light w-100 h-100",
					icon:
						"fab fa-react fa-7x d-flex justify-content-center pt-3 learningGreen",
					title: "React Session",
					description:
						"Allows persistent sessions in react, compatible with react router.",
					technologies: [
						{
							tech: "React.js",
							color: "col-1.5 px-3 rounded tagsCol1"
						}
					]
				},
				{
					cardClass: "card bg-light w-100 h-100",
					icon:
						"fab fa-react fa-7x d-flex justify-content-center pt-3 blueB",
					title: "React Notifier",
					description: "Notification library for React Applications.",
					subtTitle: "Technologies",
					technologies: [
						{
							tech: "React.js",
							color: "col-1.5 px-3 rounded tagsCol1"
						}
					]
				},
				{
					cardClass: "card bg-light w-100 h-100",
					icon:
						"fab fa-react fa-7x d-flex justify-content-center pt-3 blueM",
					title: "React Flux Dash",
					description: "Flux implementation for React.js",
					subtTitle: "Technologies",
					technologies: [
						{
							tech: "React.js",
							color: "col-1.5 px-3 rounded tagsCol1"
						}
					]
				}
			],
			applications: [
				{
					cardClass: "card bg-light w-100 h-100",
					icon:
						"fas fa-sitemap fa-7x d-flex justify-content-center pt-3 learningGreen",
					title: "CMS",
					description:
						"This is were most of the community content is being published: Lessons, Error Explanations and &quot;How to&apos;s&quot;.",
					technologies: [
						{
							tech: "React.js",
							color: "col-1.5 px-3 rounded tagsCol1"
						},
						{
							tech: "Gatsby.js",
							color: "col-1.5 px-3 rounded tagsCol2"
						},
						{
							tech: "CSS",
							color: "col-1.5 px-3 rounded tagsCol3"
						},
						{
							tech: "Markdown",
							color: "col-1.5 px-3 rounded tagsCol3"
						}
					]
				},
				{
					cardClass: "card bg-light w-100 h-100",
					icon:
						"fas fa-home fa-7x d-flex justify-content-center pt-3 blueB",
					title: "Student Web Client",
					description:
						"BreatheCode's main website for displaying the courses.",
					technologies: [
						{
							tech: "React.js",
							color: "col-1.5 px-3 rounded tagsCol1"
						},
						{
							tech: "Sass",
							color: "col-1.5 px-3 rounded tagsCol2"
						},
						{
							tech: "CSS",
							color: "col-1.5 px-3 rounded tagsCol3"
						},
						{
							tech: "HTML",
							color: "col-1.5 px-3 rounded tagsCol3"
						}
					]
				},
				{
					cardClass: "card bg-light w-100 h-100",
					icon:
						"fas fa-chalkboard-teacher fa-7x d-flex justify-content-center pt-3 blueM",
					title: "Teacher Web Client",
					description:
						"Teachers are able to manage the pace of their cohorts, review students deliverables, etc.",
					technologies: [
						{
							tech: "React.js",
							color: "col-1.5 px-3 rounded tagsCol1"
						},
						{
							tech: "Sass",
							color: "col-1.5 px-3 rounded tagsCol2"
						},
						{
							tech: "CSS",
							color: "col-1.5 px-3 rounded tagsCol3"
						},
						{
							tech: "HTML",
							color: "col-1.5 px-3 rounded tagsCol3"
						}
					]
				},
				{
					cardClass: "card bg-light w-100 h-100",
					icon:
						"fas fa-users fa-7x d-flex justify-content-center pt-3 learningGreen2",
					title: "Admin Web Client",
					description: "Manage BreathCode students, teachers, etc.",
					technologies: [
						{
							tech: "React.js",
							color: "col-1.5 px-3 rounded tagsCol1"
						},
						{
							tech: "Sass",
							color: "col-1.5 px-3 rounded tagsCol2"
						},
						{
							tech: "CSS",
							color: "col-1.5 px-3 rounded tagsCol3"
						},
						{
							tech: "HTML",
							color: "col-1.5 px-3 rounded tagsCol3"
						}
					]
				}
			]
		};
	}
	render() {
		return (
			<div>
				<Jumbotron
					jumbotronClass="jumbotron jumbotron-fluid mb-0 homeJumbo"
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
										cardClass={element.cardClass}
										iconClass={element.icon}
										title={element.title}
										cardText={element.description}
										subtitle={element.subTitle}
										technologies={element.technologies}
										tagsCol={element.tagsCol}
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
										cardClass={element.cardClass}
										iconClass={element.icon}
										title={element.title}
										cardText={element.description}
										subtitle={element.subTitle}
										technologies={element.technologies}
										tagsCol={element.tagsCol}
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
										cardClass={element.cardClass}
										iconClass={element.icon}
										title={element.title}
										cardText={element.description}
										subtitle={element.subTitle}
										technologies={element.technologies}
										tagsCol={element.tagsCol}
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
										cardClass={element.cardClass}
										iconClass={element.icon}
										title={element.title}
										cardText={element.description}
										subtitle={element.subTitle}
										technologies={element.technologies}
										tagsCol={element.tagsCol}
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
				<h2 className="display-4 titleColor">{this.props.title}</h2>
			</div>
		);
	}
}

Titles.propTypes = {
	title: PropTypes.string
};
