import React from "react";
import { SmallJumbotron } from "../components/smalljumbo.jsx";
import { Filter, Icon, Loading } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import moment from "moment";
import Store from "../store/appContext.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

export class OpenSource extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedTechnologies: []
		};
	}

	render() {
		return (
			<div>
			<Navbar/>
				<SmallJumbotron
					jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
					containerClass="pl-4 container"
					headerClass="display-4 font-weight-bold text-left"
					headerText="Open Source Projects"
					pClass="lead  text-left"
					pContent="The following projects is the list of the most important projects breatheco.de is working right now"
					spanClass="h3 text-secondary"
					spanContent="md"
				/>
				<div className="row sticky-top bg-white border-top border-bottom">
					<div className="container">
						<div className="row">
							<div className="col d-flex justify-content-start  py-1">
								<div className="pl-1">
									<Context.Consumer>
										{({ store, actions }) => {
											return (
												<Filter
													label="Tags"
													placeholder="Select one or more tags"
													onChange={d =>
														this.setState({
															selectedTechnologies: d
														})
													}
													options={store.openSource?actions
														.filterRepeated(actions.concatTechnologies(store.openSource))
														.map(tech => {
															return {
																label: tech,
																value: tech
															};
														}):<Loading/>}
												/>
											);
										}}
									</Context.Consumer>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.openSource
									.filter(t => {
										if (this.state.selectedTechnologies.length == 0) return true;
										for (let i = 0; i < this.state.selectedTechnologies.length; i++) {
											if (
												actions
													.filterTechnologies(t)
													.includes(this.state.selectedTechnologies[i].value)
											)
												return true;
										}
										return false;
									})
									.map((project, index) => {
										return (
											<div key={index} className="col-12">
												<div className="row py-2">
													<div className="col text  pt-3">
                                                    <div className ="row">
                                                        <div className="col">
                                                            <a 
                                                                href={actions.issuesFeed(
                                                                        null,
                                                                        null,
                                                                        null,
                                                                        project.gitIssueUrl
                                                                    )} 
                                                                className="h2 text-dark">{project.title}
                                                             </a>
                                                        </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <IssueFetch
                                                                        issuesFunction={actions.issuesFeed}
                                                                        gitIssueUrl={project.gitIssueUrl}
                                                                        issueLink={project.gitIssueUrl}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
														<p className="lead mt-3">{project.description}</p>
														<div className="row mb-2 pl-2">
                                                            <div className="col pl-0">
                                                                {project.technologies.map((technologie, index) => {
                                                                    return (
                                                                        <div key={index} className="author badge badge-pill badge-light mr-2">
                                                                            {technologie.tech}
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                            	<div className="ml-auto mr-3">
															<a
																href={actions.issuesFeed(
																	null,
																	null,
																	null,
																	project.gitIssueUrl
																)}
																rel="noopener"
																className="btn btn-outline-success buttonHeight mr-2 ">
																Project
															</a>
															<a
																href={actions.issuesFeed(
																	null,
																	null,
																	project.gitIssueUrl
																)}
																rel="noopener"
																className="btn btn-outline-primary buttonHeight  px-2 ">
																README.md
															</a>
														</div>
														</div>
													</div>
												</div>
												<hr className="my-4" />
											</div>
										);
									});
							}}
						</Context.Consumer>
					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}
export default Store(OpenSource)

class IssueFetch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false
		};
	}

	componentDidMount() {
		fetch(this.props.issuesFunction(this.props.gitIssueUrl))
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					items: json
				});
			})
			.catch(err => console.error(err));
	}
	render() {
		let { isLoaded, items } = this.state;

		if (!isLoaded) {
			return <div className="d-flex justify-content-end">Loading ..</div>;
		} else {
			return (
				<a
					target="_blank"
					href={this.props.issuesFunction(null, this.props.issueLink)}
					className="btn btnRED text-danger rounded btn-sm mr-0 mr-md-3 mb-4 mb-sm-0  py-2">
					<i className="fas fa-exclamation-triangle" />
					&nbsp;
					{items.length}
					&nbsp;Issues
				</a>
			);
		}
	}
}

IssueFetch.propTypes = {
	gitIssueUrl: PropTypes.string,
	issueLink: PropTypes.string,
	issuesFunction: PropTypes.func
};
