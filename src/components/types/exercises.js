import React, { useContext } from "react";
import Helmett from "../helmet";
import { SmallJumbotron } from "../smalljumbo.jsx";
import { Link } from "gatsby"
import Layout from "../layout";

const Exercises = ({ pageContext }) => {
    const { exercises } = pageContext;
    return <div>
        <Helmett
            title="BreatheCode | Interactive Exercises and Tutorials"
            description="All exercises are incremental and come with explanations video solutions and automatic grading"
            url="https://breatheco.de/interactive-exercises"
            image="https://ucarecdn.com/717ad4fe-f186-44aa-872a-dd04584e4da0/logobcode.png"
        />
        <Layout>
            <SmallJumbotron
                jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
                containerClass="pl-4  container"
                headerClass="headerSizeResponsive display-4  font-weight-bold  text-left"
                headerText="Interactive Exercises and Tutorials"
                pClass="lead  text-left"
                pContent="the following lessons explain different programing
                concepts and have been published by breathe code
                members, search for a partiulars lesson using the
                filters bellow"
                spanClass="h3 text-secondary"
                spanContent="md"
            />
            <div className="container">
                <div className="card-columns">
                    {Object.keys(exercises).map(slug => {
                        const e = exercises[slug];
                        return <Link className="card pointer" to={`/interactive-exercise/${slug}`}>
                            {e.preview && <img src={e.preview} className="card-image mb-0" alt={`Preview for ${e.title}`} />}
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text text-dark">{e.description}</p>
                            </div>
                        </Link>;
                    })}
                </div>
            </div>
        </Layout>
    </div>
}

export default Exercises;