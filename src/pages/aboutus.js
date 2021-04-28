import React, { useEffect, useState } from "react";
import { MarkdownParser, Loading } from "@breathecode/ui-components";
import Helmett from "../components/helmet";
import Layout from "../components/layout";

const AboutUs = () => {
	const [ content, setContent ] = useState(null);
	useEffect(() => {
		fetch("https://raw.githubusercontent.com/breatheco-de/main-documentation/master/README.md")
			.then(res => res.text())
			.then(markdown => setContent(markdown))
			.catch(err => console.error(err));
	},[])

	return (
		<Layout>
			<Helmett
				title="BreatheCode | About Us"
				description="BreatheCode's mission is to accelerate the way junior developers learn and evolve using technology."
				url="https://breatheco.de/aboutus"
				image="https://ucarecdn.com/717ad4fe-f186-44aa-872a-dd04584e4da0/logobcode.png"
			/>
			<p align="center">
				<img alt="breathecode logo" src="https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,128" />
			</p>
			<h1 className="mb-5" align="center">
				{" "}
				Welcome to BreatheCode{" "}
			</h1>
			<div className="px-5 container">
				<MarkdownParser source={content == null ? <Loading/> : content} />
			</div>
		</Layout>
	);
}

export default AboutUs
