import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Cards extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className={this.props.cardClass}>
					{this.props.gitIssueUrl && (
						<TheFetch
							Issue={this.props.gitIssueUrl}
							gitIssueUrl={this.props.gitIssueUrl}
						/>
					)}

					<i className={this.props.iconClass} />

					<div className="container d-flex justify-content-center">
						<div className="row d-flex flex-row justify-content-around w-100 pb-0">
							{this.props.technologies &&
								this.props.technologies.map(
									(element, index) => {
										return (
											<div
												key={index}
												className={element.color}>
												{element.tech}
											</div>
										);
									}
								)}
						</div>
					</div>
					<div className="card-body">
						<h5 className="card-title d-flex justify-content-center">
							{this.props.title}
						</h5>
						<p className="card-text d-flex justify-content-center">
							{this.props.cardText}
						</p>
					</div>
					<div className="d-flex justify-content-center mb-2">
						<Button
							gitIssueUrl={this.props.gitIssueUrl}
							buttonContent="Go to README"
						/>
						<Button
							gitReadme={this.props.gitIssueUrl}
							buttonContent="Go to issues"
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Cards.propTypes = {
	cardClass: PropTypes.string,
	iconClass: PropTypes.string,
	title: PropTypes.string,
	cardText: PropTypes.string,
	subTitle: PropTypes.string,
	cardItem: PropTypes.string,
	technologies: PropTypes.array,
	tagsCol: PropTypes.string,
	gitIssueUrl: PropTypes.string
};

class TheFetch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false
		};
	}

	issuesFeed(urlIssue, urlReadme) {
		if (urlIssue) {
			let splitUrl = urlIssue.split("/");
			let companyName = splitUrl[3];
			let projectName = splitUrl[4];
			let finalUrl =
				"https://api.github.com/repos/" +
				companyName +
				"/" +
				projectName +
				"/issues";
			return finalUrl;
		}

		if (urlIssue) {
			let splitUrl = urlIssue.split("/");
			let companyName = splitUrl[3];
			let projectName = splitUrl[4];
			let finalUrl =
				"https://github.com/" +
				companyName +
				"/" +
				projectName +
				"/issues";
			return finalUrl;
		}
	}
	componentDidMount() {
		fetch(this.issuesFeed(this.props.gitIssueUrl))
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					items: json
				});
			});
	}

	render() {
		let { isLoaded, items } = this.state;

		if (!isLoaded) {
			return <div className="d-flex justify-content-end">Loading ..</div>;
		} else {
			return (
				<div className="d-flex justify-content-end">
					<button
						type="button"
						href={this.issuesFeed(undefined, this.props.Issue)}
						className="btn btn-danger d-flex btnRED text-light rounded btn-sm">
						<i className="fas fa-exclamation" />
						&nbsp;
						{items.length}
						&nbsp;Issues
					</button>
				</div>
			);
		}
	}
}

TheFetch.propTypes = {
	gitIssueUrl: PropTypes.string,
	Issue: PropTypes.string
};

class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	issuesFeed(urlIssue, urlReadme) {
		if (urlIssue) {
			let splitUrl = urlIssue.split("/");
			let companyName = splitUrl[3];
			let projectName = splitUrl[4];
			let finalUrl =
				"https://github.com/" +
				companyName +
				"/" +
				projectName +
				"/issues";
			return finalUrl;
		}

		if (urlReadme) {
			let splitUrl = urlReadme.split("/");
			let companyName = splitUrl[3];
			let projectName = splitUrl[4];
			let finalUrl =
				"https://github.com/" +
				companyName +
				"/" +
				projectName +
				"/blob/master/README.md";
			return finalUrl;
		}
	}
	render() {
		return (
			<a
				href={this.issuesFeed(
					this.props.gitReadme,
					this.props.gitIssueUrl
				)}
				className="btn btn-secondary btn-sm btnColor mr-1">
				{this.props.buttonContent}
			</a>
		);
	}
}

Button.propTypes = {
	gitIssueUrl: PropTypes.string,
	issuesFeed: PropTypes.func,
	buttonContent: PropTypes.string,
	gitReadme: PropTypes.string
};
