import React, { useState, useEffect } from "react";
import { MarkdownParser, Loading } from "@breathecode/ui-components";
import Navbar from "../navbar.jsx";
import Helmett from "../helmet"

const SingleExercise = ({ pageContext }) => {
    const [ content, setContent ] = useState(null);
    useEffect(() => {
        fetch(pageContext.readme)
            .then(res => res.text())
            .then(markdown => setContent(markdown))
            .catch(err => console.error(err));
    },[]);
    return (<div>
        <Helmett
            title={pageContext.title}
            description={pageContext.description}
            url={ `https://breatheco.de/asset/${pageContext.slug}`}
            image="https://ucarecdn.com/717ad4fe-f186-44aa-872a-dd04584e4da0/logobcode.png"
        />
        <Navbar/>
        <div className="container mt-5">
            <h1>{pageContext.title}</h1>
            { content ? 
                <MarkdownParser source={content} />
                :
                <Loading/>
            }
        </div>
    </div>);
}

export default SingleExercise
