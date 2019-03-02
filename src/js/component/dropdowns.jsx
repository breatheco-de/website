import React from "react";
import PropTypes from "prop-types";

export class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdownItems: [
				{
					pClass: "border-bottom mb-0 parragraphs",
					iconClass: "lison",
					icon: "fas fa-apple-alt fa-2x icon",
					heading: "Learn The Platform",
					listItems: [
						"Submit a quiz",
						"Submit a project",
						"Upload your Replit Classes"
					]
				},
				{
					pClass: "border-bottom mb-0 parragraphs",
					iconClass: "lison",
					icon: "far fa-window-maximize fa-2x icon",
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
					pClass: "border-bottom mb-0 parragraphs",
					iconClass: "lison",
					icon: "fas fa-code fa-2x icon",
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
					pClass: "border-bottom mb-0 parragraphs",
					iconClass: "lison",
					icon: "fas fa-eye fa-2x icon",
					heading: "Front-End Web Development",
					listItems: [
						"The DOM",
						"Events",
						"AJAX",
						"From JS to jQuery"
					]
				},
				{
					pClass: "border-bottom mb-0 parragraphs",
					iconClass: "lison",
					icon: "fas fa-server fa-2x icon",
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
					pClass: "border-bottom mb-0 parragraphs",
					iconClass: "lison",
					icon: "fas fa-hammer fa-2x icon",
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
		return this.state.dropdownItems.map((element, index) => {
			return (
				<DropdownItem
					key={index}
					icon={element.icon}
					heading={element.heading}
					listItems={element.listItems}
					iconClass={element.iconClass}
					pClass={element.pClass}
				/>
			);
		});
	}
}

Dropdown.propTypes = {
	icon: PropTypes.string,
	heading: PropTypes.string,
	listItems: PropTypes.array,
	dropdownsItems: PropTypes.array,
	iconClass: PropTypes.string
};

export class DropdownItem extends React.Component {
	constructor() {
		super();
		this.state = {
			opened: false
		};
	}

	render() {
		return (
			<li className={`nav-item dropdown ${this.state.iconClass}`}>
				<i className={this.props.icon}>&nbsp;</i>
				<p
					className={this.props.pClass}
					onClick={() =>
						this.setState({ opened: !this.state.opened })
					}>
					{this.props.heading}
				</p>
				<div
					className={`${this.props.numbers} collapse ${this.state
						.opened && "show"}`}>
					<div className="container">
						<p className="first-nav-parragraphs">
							<strong>{this.props.boldDescription}</strong>
						</p>
					</div>
					<ol>
						{this.props.listItems.map((item2, i2) => {
							return (
								<a className="dropdown-item" key={i2} href="#">
									<li className="nostyle">{item2}</li>
								</a>
							);
						})}
					</ol>
				</div>
			</li>
		);
	}
}

DropdownItem.propTypes = {
	icon: PropTypes.string,
	heading: PropTypes.string,
	listItems: PropTypes.array,
	iconClass: PropTypes.string,
	pClass: PropTypes.string,
	boldDescription: PropTypes.string,
	numbers: PropTypes.string
};
