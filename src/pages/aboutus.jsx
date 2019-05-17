import React from "react";
import { SmallJumbotron } from "../components/smalljumbo.jsx";
import { MarkdownParser } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";
import Store from "../store/appContext.jsx";
import "../styles/index.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import {  Loading } from "@breathecode/ui-components";

class AboutUs extends React.Component {
	render() {
		return (
			<div>
			<Navbar/>
				<p align="center">
					<img src="https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,128" />
				</p>
				<h1 className="mb-5" align="center">
					{" "}
					Welcome to BreatheCode{" "}
				</h1>
				<div className="px-5 container">
					<Context.Consumer>
						{({ store, actions }) => {
							return <MarkdownParser source={store.markdown==null?<Loading/>:store.markdown} />;
						}}
					</Context.Consumer>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Store(AboutUs)
