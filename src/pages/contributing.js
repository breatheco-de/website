import React, { useState, useContext } from "react";
import { SmallJumbotron } from "../components/smalljumbo.jsx";
import { Filter, Loading } from "@breathecode/ui-components";
import { Store, Context } from "../store/context.js";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import "@breathecode/ui-components/dist/main.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Layout from "../components/layout";
import Helmett from "../components/helmet";


const Contributing = () => {
	const [ selectedLabels, setSelectedLabels ] = useState([]);
	const { actions } = useContext(Context);
	const store = actions.getStore();

	const filterByTags = issue => {
		if(selectedLabels.length === 0) return true;
		const issueLabels = issue.labels.map(l => l.name || l);
		for(let i = 0; i<selectedLabels.length;i++){
			if(issueLabels.includes(selectedLabels[i].value)) return true;
		}
		return false;
	}

	const filt = store.issueLabels ? store.issueLabels.map(i => ({ label: i, value: i})):null;
	return (
		<div>
			<Helmett
				title="BreatheCode | Contributing"
				description="Are you here to contribute? We have organized all our needs on 'github issues', browse the following list and pick anything to start contributing!"
				url="https://breatheco.de/contributing/"
				image="https://ucarecdn.com/717ad4fe-f186-44aa-872a-dd04584e4da0/logobcode.png"
			/>
			<Layout>
				<Navbar/>
				<div>
						<Helmett
						title="BreatheCode|Contributing"
						description="Are you here to contribute? We have organized all our needs on 'github issues', browse the following list and pick anything to start contributing!"
						url="https://breathecode-website.camilocoo.now.sh/contributing"
						image="https://ucarecdn.com/99082539-2a6e-42e4-984c-c62934a465f1/breathecodeiconwhite.png"
					/>
					<SmallJumbotron
						jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
						containerClass="pl-3  container"
						headerClass="fontSizeContributing display-4  font-weight-bold  text-left"
						headerText="Contributing"
						pClass="lead  text-left"
						pContent="Are you here to contribute? We have organized all our needs on 'github issues', browse the following list and pick anything to start contributing!"
						spanClass="h3 text-secondary"
						spanContent="md"
					/>

					<div className="rowFontSize row border-top border-bottom sticky-top bg-white">
						<div className="container">
							<div className="row">
								<div className="col d-flex justify-content-start pl-2">
									<div className="mx-1 px-2 px-md-0 py-1">
										<Filter
											label="Labels: "
											placeholder="Filter issues by labels"
											onChange={d => setSelectedLabels(d)}
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
								store.allIssues.filter(issue => filterByTags(issue)).map((issue, index) => {
										return (
											<div key={index} className="col-12 py-3 ">
												<a
													target="_blank" rel="noopener noreferrer"
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
																			{label}
																		</div>
																	);
															})
															: <Loading/>}
													</div>
													<a href={issue["html_url"] ? issue["html_url"] : ""} target="_blank" rel="noopener noreferrer"  className="btn btn-outline-primary mr-3">Solve issue</a>
												</div>
												<hr className="my-4" />
											</div>
										);
									})
								: <Loading/>}
						</div>
					</div>
				</div>
				<Footer/>
			</Layout>
		</div>
	);
};

export default Store(Contributing)