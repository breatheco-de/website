import React from "react";
import { Icon } from "@breathecode/ui-components";
import GitpodIcon from "../images/gitpod-icon.svg";
const ExerciseDetails = ({ data }) => <div className="row p-1 sticky-top mt-2">
    <div className="col">
        <div className="card ">
            <div className="card-body text-left">
                <h5 className="card-title font-weight-bold lead h4">Goal</h5>
                <p className="card-subtitle mb-2 text-muted font-italic mb-3">
                {data.description}
                </p>
                <div className="row border-bottom p-1 m-0 no-gutters small">
                    <div className="col-5 ">Difficulty</div>
                    <div className="col-7 d-flex justify-content-end">{data.difficulty}</div>
                </div>
                <div className="row border-bottom p-1 m-0 no-gutters small">
                    <div className="col-6 "><span className="colorRed"><Icon type="github" className="text-danger"/></span><span className="ml-1">Repository:</span></div>
                    <div className="col-6 d-flex justify-content-end ">{data["repository"]? <a target="_blank" href={data["repository"]}>Click to open</a>:"Not available"}</div>
                </div>
                <div className="row border-bottom p-1 m-0 no-gutters small">
                    <div className="col-6 "><span className="colorRed"><Icon type="youtube" className="text-danger"/></span><span className="ml-1">Video available:</span></div>
                    <div className="col-6 d-flex justify-content-end ">{data["video-path"]?"Available":"Not available"}</div>
                </div>
                <div className="row border-bottom p-1 m-0 no-gutters small">
                    <div className="col-7 "><span ><Icon type="play" className="text-danger font-size" /></span><span className="ml-2">Live demo available:</span></div>
                    <div className="col-5 d-flex justify-content-end ">{data["live-url"]?"Available":"Not available"}</div>
                </div>
                <div className="row border-bottom p-1 m-0 no-gutters small">
                    <div className="col-8 "><span><Icon type="circle" /></span><span className="ml-1">Project average duration:</span></div>
                    <div className="col-4 d-flex justify-content-end">{data.duration} hr</div>
                </div>
                <div className="row border-bottom p-1 m-0 no-gutters small">
                    <div className="col-5"><span><Icon type="code" /></span><span className="ml-1">Technologies:</span></div>
                    <div className="col-7 d-flex justify-content-end ">{data.technology}</div>
                </div>
                <div className="row p-1 m-0 no-gutters small">
                    <div className="col-12 mb-2">Skills: </div>
                    <div className="col-12">
                        <ul className="list list-unstyled row ml-0">
                        {data.talents?data.talents.map((t,i)=>{
                                return(
                                <li key={i} className="list-item col-6 mb-0">{t.badge}</li>
                                );
                        }):""}
                        </ul>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-12">
                        {data["repository"] && <button
                            onClick={() => window.open(`https://www.gitpod.io/#${data["repository"]}`)}
                            className="btn btn-primary btn-md px-4 w-100 ">
                            <GitpodIcon height="30px" width="30px" className="text-white" /> Open in Gitpod
                        </button>}
                    </div>
                    <div className="col-12 mt-3">
                        {data["repository"] && <button
                            onClick={() => window.open(`${data["repository"]}`)}
                            className="btn btn-success btn-md px-4 w-100 ">
                            <Icon type="download" className="text-danger font-size" /> Or Manually Download
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;

export default ExerciseDetails;