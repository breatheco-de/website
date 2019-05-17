import React from "react";
import { Jumbotron } from "../components/jumbotron.jsx";
import "../styles/index.css";
import { Context } from "../store/appContext.jsx";
import moment from "moment";
import Store from "../store/appContext.jsx";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

class Home extends React.Component {
	render() {
		return (
			<div>
			<Navbar/>
				<Jumbotron
					jumbotronClass="jumbotron bg-white bold "
					jumbotronTitle={() => <h1 className="display-4 text-center mb-sm-5">Welcome to BreatheCo<span className="text-primary">.</span>de</h1>}
					firstColumnClass="col-sm-12 col-md-5 text-center text-md-right pt-5 pt-md-0"
					secondColumnClass="col-sm-12 col-md-2  "
					thirdColumnClass="col-sm-12 col-md-5 text-center text-sm-center text-md-left pt-5 pt-md-0"
					pClassFirstCol="h2 bold"
					pHeaderFirstCol="Are you here to help?"
					pClassSecondCol="h2 bold"
					pHeaderSecondCol="Are your here to learn code?"
					imgSrc="https://ucarecdn.com/dbe55247-376b-4b81-988e-7dd95f4233b5/-/resize/90x/"
					imgClass="mx-auto d-flex"
					pTexClassColOne="lead"
					pTextFirstCol="you can write documentation, write code, fix bugs or join current projects"
					firstLinkColOneText="More About The Non-profit"
					firstColumnLinkClass="text-success"
					hrLineClass="my-2"
					secondLinkColOneText="Our Open Source Projects"
					thirdLinkColOneText="Start Collaborating now"
					smallDescriptionFirstCol="Thanks to the open source contributions we have been able to publish 20 projects that have helped more than 2,000 learners , you can read about the reach and impact of our publications here"
					smallDescriptionFirstColClass="mt-3 text-secondary"
					
					buttonAlignCenterClass=""
					pTextClassColTwo="lead"
					pTextSecondCol="We strongly recomend following our learning process in this order"
					linksClassSecondCol="blueLinks"
					firstLinkColTwoText="Read 10 min lessons"
					secondLinkColTwoText="Do interactive tutorials"
					thirdLinkColTwoText="Code a real life project"
					smallDescriptionsecondTextCol="All of our contents, videos and interactive tutorials are published and open sourced to the web, but by being a sponsor you will be able to track your progress and receive guided learning and much more"
					buttonColTwoClass="btn btn-outline-primary btn-lg  text-dark px-3 px-md-5 blueButton"
					buttonColTwoText="login for guided learning"
					buttonSmallText="$40/mo contribution"
					buttonAlignCenterClassTwo=" "
					jumboRowClass="row"
					linkClassColOne="textDecorationGreen"
					smallDescriptionSecondColClass=""
					secondColThirdLinkHref="https://projects.breatheco.de/"
				/>
				<div className="jumbotron jumbotron-fluid blueButton py-4">
					<div className="container text-center">
						<p className=" h3 font-weight-bold">Join Us</p>
						<p className="h6">Get notified about our events, projects and contributions</p>
						<form className="form-inline d-flex justify-content-center">
							<div className="form-group mb-2 ">
								<label htmlFor="staticEmail2" className="sr-only">
									Email
								</label>
								<input
									type="text"
									className="form-control"
									id="staticEmail2"
									placeholder="Your First Name"
								/>
							</div>
							<div className="form-group mx-sm-3 mb-2">
								<label htmlFor="inputPassword2" className="sr-only">
									Password
								</label>
								<input
									type="text"
									className="form-control"
									id="inputPassword2"
									placeholder="Email Adress"
								/>
							</div>
							<button type="submit" className="btn btn-primary mb-2">
								Join The Organization
							</button>
						</form>
					</div>
				</div>
				<div className="pl-5 container-fluid">
					<div className="row mb-4">
						<div className="col-12">
							<Context.Consumer>
								{({ store, actions }) => {
									return <p className="h2">{store.events.length > 0 ? "Upcoming Events" : ""}</p>;
								}}
							</Context.Consumer>
						</div>
					</div>
					<div className="row w-75">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.events.map((event, index) => {
									return (
										<div key={index} className="col-12 d-flex">
											<div className="pr-3">
												<p className="pl-3 h6 text-right font-weight-bold">
													<i className="3x pl-3 ml-5 far fa-calendar-alt" />
													{moment(event.event_date).format("MMMM Do YYYY, h:mm:ss a")}
													<br />
													<small className="text-secondary">
														{event.address}
														<br />
														{event.city_slug}
													</small>
												</p>
											</div>
											<div>
												<p className="h5">{event.title}</p>
												<p className="h6 text-secondary">{event.type}</p>
												<br />
											</div>
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

export default Store(Home)
