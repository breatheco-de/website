import React from "react";
import Store from "../store/appContext.jsx";
import { SmallJumbotron } from "../components/smalljumbo.jsx";
import { Filter, Loading } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import "@breathecode/ui-components/dist/main.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Layout from "../components/layout"


 class Contributing extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedLabels: []
		};
	}

	filterByTags = issue => {
		if(this.state.selectedLabels.length == 0) return true;
		const issueLabels = issue.labels.map(l => l.name);
		for(let i = 0; i<this.state.selectedLabels.length;i++){
			if(issueLabels.includes(this.state.selectedLabels[i].value)) return true;
		}
		return false;
	}

	render() {
		return (
			<div>
            <Layout>
				<Navbar/>
				<Context.Consumer>
					{({ store, actions }) => {
						const filt = store.issueLabels ? store.issueLabels.map(i => ({ label: i, value: i})):null;
						return (
							<div>
								<SmallJumbotron
									jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
									containerClass="pl-3  container"
									headerClass="headerSizeResponsive display-md-4  font-weight-bold  text-left"
									headerText="Contributing"
									pClass="lead  text-left"
									pContent="Are you here to contribute? We have organized all our needs on 'github issues', browse the following list and pick anything to start contributing!"
									spanClass="h3 text-secondary"
									spanContent="md"
								/>

								<div className="row border-top border-bottom sticky-top bg-white">
									<div className="container">
										<div className="row">
											<div className="col d-flex justify-content-start pl-2">
												<div className="py-2">
													<Filter
														label="Labels: "
														placeholder="Filter issues by labels"
														onChange={d =>
															this.setState({
																selectedLabels: d
															})
														}
														options={Array.isArray(filt) ? filt:[] }
														withToggler={false}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row">
										{store.allIssues ?
											store.allIssues.filter(this.filterByTags.bind(this)).map((issue, index) => {
													return (
														<div key={index} className="col-12 py-3 ">
															<a
																target="_blank"
																href={issue["html_url"] ? issue["html_url"] : ""}
																className="h2 text-dark  text-left">
																{issue.title}
															</a>
															<p className="lead  text-left text-secondary">
																Project: <u> Assets</u>{" "}
																<i>
																	issue #
																	{issue.number +
																		" opened on " +
																		moment(issue.created_at).format(
																			"MMMM Do YYYY, h:mm:ss a"
																		)}
																	{issue.assignee && issue.assignee.login && (" by " + issue.assignee.login)}
																</i>
															</p>
															<div className="row pl-2">
                                                                <div className="col pl-0">
                                                                    {issue.labels
                                                                        ? issue.labels.map((label, index) => {
                                                                                return (
                                                                                    <div
                                                                                        key={index}
                                                                                        className="author badge badge-pill badge-light mr-2">
                                                                                        {label.name}
                                                                                    </div>
                                                                                );
                                                                        })
                                                                        : <Loading/>}
															    </div>
                                                                <a href={issue["html_url"] ? issue["html_url"] : ""} target="_blank"  className="btn btn-outline-primary mr-3">Solve issue</a>
                                                            </div>
															<hr className="my-4" />
														</div>
													);
											  })
											: <Loading/>}
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
				<Footer/>
                </Layout>
			</div>
		);
	}
}

export default Store(Contributing)