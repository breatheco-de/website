import React, {useState} from "react";
import { SmallJumbotron } from "../smalljumbo.jsx";
import { Filter, Loading } from "@breathecode/ui-components";
import { Context, Store } from "../../store/context.js";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import "@breathecode/ui-components/dist/main.css";
import { Link } from "gatsby";
import Helmett from "../helmet";
import queryString  from 'query-string';
import { Location, navigate } from '@reach/router';
import withLocation from "../withLocation";
import Layout from "../layout";


const Quizzes = (props) => {
	const [selectedTags, setSelectedTags] = useState([]);
	const { pageContext } = props;
	const list = (Array.isArray(pageContext.quizzess)) ? pageContext.quizzess : [];
	return (<div>
		<Helmett
			title="BreatheCode | Quizzes"
			description="Recomended books, courses, videos and other assets to accelerate your learning."
			url="https://breatheco.de/assets/"
			image="https://ucarecdn.com/717ad4fe-f186-44aa-872a-dd04584e4da0/logobcode.png"
		/>
		<Layout>
			<SmallJumbotron
				jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
				containerClass="pl-4  container"
				headerClass="headerSizeResponsive display-4  font-weight-bold  text-left"
				headerText="Assessments & Quizzes"
				pClass="lead  text-left"
				pContent="Time to test your coding knowledge! The following list is a curation of handpicked Quizzes and Trivies designed to help you asses your knowledge on one particular skill"
				spanClass="h3 text-secondary"
				spanContent="md"
			/>
			<div className="row border-top border-bottom sticky-top bg-white">
				<div className="container">
					<div className="row">
						<div className="col  d-flex justify-content-start p-0">
							<div className="px-1 pl-1 py-2">
								<Filter
									label="technologie"
									placeholder="Filter By technology"
									onChange={d => setSelectedTags(d)}
									options={[{ label: "loading", value: "loading" }]}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				{list && list.map((item) => <div>{item.info.name}</div>)}
			</div>
		</Layout>
	</div>
	);
}

export default Store(Quizzes);