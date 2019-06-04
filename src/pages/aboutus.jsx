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
import Helmet from "react-helmet";

class AboutUs extends React.Component {
	render() {
		return (
			<div>
            <Helmet>
                    <title>About Us</title>
                    <meta name="description" content="BreatheCode's mission is to accelerate the way junior developers learn and evolve using technology." />
                    <meta name="image" content="http://ucarecdn.com/99082539-2a6e-42e4-984c-c62934a465f1/breathecodeiconwhite.png"/>
            </Helmet>
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
