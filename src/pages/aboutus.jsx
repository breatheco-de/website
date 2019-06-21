import React from "react";
import { SmallJumbotron } from "../components/smalljumbo.jsx";
import { MarkdownParser } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";
import Store from "../store/appContext.jsx";
import "../styles/index.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import {  Loading } from "@breathecode/ui-components";
import "@breathecode/ui-components/dist/main.css";
import Layout from "../components/layout";
import Helmett from "../components/helmet";

class AboutUs extends React.Component {
	render() {
        let {pageContext}= this.props;
		return (
			<div>
             <Helmett
                    title="BreatheCode | About Us"
                    description="BreatheCode's mission is to accelerate the way junior developers learn and evolve using technology."
                    url="https://breatheco.de/aboutus"
                    image="https://ucarecdn.com/717ad4fe-f186-44aa-872a-dd04584e4da0/logobcode.png"
                />
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
