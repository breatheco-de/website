import React, { useState, useEffect } from "react";
import { MarkdownParser, Loading } from "@breathecode/ui-components";
import Navbar from "../navbar.jsx";
import ExerciseDetails from "../ExerciseDetails.js";
import Helmett from "../helmet"
import "../../styles/exercise.css";

const SingleExercise = ({ pageContext }) => {
    const [ content, setContent ] = useState(null);
    useEffect(() => {
        fetch(pageContext.readme)
            .then(res => res.text())
            .then(markdown => setContent(markdown.replace(/(\[\!\[.+\]\(.+open-in-gitpod\.svg.+\.git\))/g, (whole, a, b) => {
                console.log("Whole", whole);
                console.log("a",a);
                console.log("b",b);
                return "";
            })))
            .catch(err => console.error(err));
    },[]);
    return (<div className="exercise">
        <Helmett
            title={pageContext.title}
            description={pageContext.description}
            url={ `https://breatheco.de/asset/${pageContext.slug}`}
            image="https://ucarecdn.com/717ad4fe-f186-44aa-872a-dd04584e4da0/logobcode.png"
        />
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-8">
                    <h1>{pageContext.title}</h1>
                    { content ? 
                        <MarkdownParser source={content} />
                        :
                        <Loading/>
                    }
                </div>
                <div className="col-12 col-sm-4">
                    <ExerciseDetails data={pageContext}/>
                </div>
            </div>
        </div>
    </div>);
}

export default SingleExercise
