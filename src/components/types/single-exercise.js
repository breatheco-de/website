import React, { useState, useEffect } from "react";
import { MarkdownParser, Loading, Icon } from "@breathecode/ui-components";
import Navbar from "../navbar.jsx";
import { Context, Store } from "../../store/context.js";
import ExerciseDetails from "../ExerciseDetails.js";
import Helmett from "../helmet";
import atob from "atob";
import YouTube from 'react-youtube';
import "../../styles/exercise.css";

const Tags = ({ details }) => <p>
    {details["language"] && <span class="badge badge-secondary p-2 mr-1 mb-1">{details["language"]}</span>}
    {<span class="badge badge-secondary p-2 mr-1 mb-1"><Icon type="graduate" />{" "}interactive</span>}
    {details["graded"] && <span class="badge badge-secondary p-2 mr-1 mb-1">✅ auto-grading</span>}
    {details["difficulty"] && <span class="badge badge-secondary p-2 mr-1 mb-1"> 💪{" "+details["difficulty"]}</span>}
    {details["video-solutions"] && <span class="badge badge-secondary p-2 mr-1 mb-1"><Icon type="youtube" className="text-danger"/> video solution</span>}
    {details["duration"] && <span class="badge badge-secondary p-2 mr-1 mb-1">⏱{" "+details["duration"]} hrs</span>}
</p>;

const SingleExercise = ({ pageContext }) => {
    const content = pageContext.readme && typeof(pageContext.readme) === "string" ? atob(pageContext.readme) : null;

    return (<div className="exercise">
        <Helmett
            title={pageContext.title}
            description={pageContext.description}
            url={ `https://breatheco.de/asset/${pageContext.slug}`}
            image={ pageContext.preview || "https://ucarecdn.com/d9be5fe8-6319-4260-afef-0063fad2ae28/"}
        />
        <Navbar/>
        <div className="container">
            <div className="row mt-5">
                <div className="col-12">
                    <div className="row">
                        <div className={`col-12 ${pageContext.preview ? "col-sm-6" : ""}`}>
                            <h1>{pageContext.title}</h1>
                            <div class="d-none d-lg-block">
                                <h5 className="card-title font-weight-bold lead h4 mt-3">Goal</h5>
                                <p className="card-subtitle mb-2 text-muted font-italic mb-3">
                                {pageContext.description}
                                </p>
                                <Tags details={pageContext} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                        { typeof(pageContext.intro) == "string" ?
                            <YouTube videoId={pageContext.intro.replace("https://www.youtube.com/watch?v=","")} opts={{ width: "100%"}}  />
                            :
                            pageContext.preview && 
                                <img src={pageContext.preview} className="w-100 rounded" />
                            }
                        </div>
                        <div className="col-12 d-lg-none mb-3">
                            <h5 className="card-title font-weight-bold lead h4 mt-3">Goal</h5>
                            <p className="card-subtitle mb-2 text-muted font-italic mb-3">
                                {pageContext.description}
                            </p>
                            <Tags details={pageContext} />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 order-md-12 mb-3">
                    <ExerciseDetails data={pageContext}/>
                </div>
                <div className="col-12 col-md-8">
                    <div className="row">
                        <div className="col-12 bg-light">
                            <h2 className="card-title font-weight-bold lead h4 mt-3">README.md</h2>
                            { content ? 
                                <MarkdownParser source={content} />
                                :
                                <Loading/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Store(SingleExercise)
