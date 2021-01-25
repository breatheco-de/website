import React, { useContext, useState } from "react";
import { Icon } from "@breathecode/ui-components";
import { Context } from "../store/context";
import GitpodIcon from "../images/svg/gitpod-icon.svg";
import withLocation from "./withLocation";

const ExerciseDetails = ({ data, location }) => {
    const { store, actions } = useContext(Context);
    const [ formData, setFormData ] = useState({ email: "", first_name: ""});
    const [ error, setError ] = useState(null);
    const [ status, setStatus ] = useState("idle");
    return <div className="row sticky-top">
        <div className="col">
            <div className="card ">
                <div className="card-body text-left">
                    { store.session.active ? 
                        <div className="row text-center">
                            <div className="col-12">
                                {data["repository"] && <button
                                    onClick={() => window.open(`https://www.gitpod.io/#${data["repository"]}`)}
                                    className="btn btn-primary btn-md px-4 w-100 ">
                                    <GitpodIcon height="30px" width="30px" className="text-white" /> Open in Gitpod
                                </button>}
                            </div>
                            <div className="col-12 my-2">
                                {data["repository"] && <button
                                    onClick={() => window.open(`${data["repository"]}`)}
                                    className="btn btn-success btn-md px-4 w-100 ">
                                    <Icon type="download" className="text-danger font-size" /> Manual Download
                                </button>}
                            </div>
                        </div>
                        : !["idle", "loading", "error"].includes(status) && status==="done" ?
                            <div className="row text-center mb-3">
                                <div className="col-12 ">
                                    <p className="alert alert-success">
                                        Check your email! <br /> And start learning in 2 minutes 😃👏
                                    </p>
                                </div>
                            </div>
                            :
                            <div className="row text-center mb-3">
                                <div className="col-12">
                                    <p className={`mt-0 mb-1 text-left d-block ${error ? "bg-danger p-2 rounded text-white" : ""}`}>{ error ? error : "Please enter your information and receive instant access"}</p>
                                    <input type="text" className={`form-control mb-2 ${error ? "border border-danger" : ""}`} placeholder="Your first name"
                                        onChange={e => setFormData({ ...formData, first_name: e.target.value })}
                                        value={formData.first_name}
                                        />
                                </div>
                                <div className="col-12">
                                    <input type="email" className={`form-control mb-2 ${error ? "border border-danger" : ""}`} placeholder="Your email"
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        value={formData.email}
                                    />
                                </div>
                                <div className="col-12">
                                    <button
                                        onClick={() => {
                                            if(status !== "idle") return;
                                            setError(null);
                                            setStatus("loading");
                                            actions.signupCourse({ 
                                                ...formData, 
                                                current_download: data["repository"], 
                                                utm_url: location.href,
                                                tags: [data["slug"]] 
                                            })
                                                .then(data => setStatus("done"))
                                                .catch(error => setStatus("idle") || setError(error.message))
                                        }}
                                        className="btn btn-success btn-md px-4 w-100 ">
                                        { status === "loading" ? "Loading..." : "Get instant access"}
                                    </button>
                                </div>
                            </div>
                    }
                    <div className="d-none d-lg-block">
                        <div className="row border-bottom p-1 m-0 no-gutters small">
                            <div className="col-5 ">Difficulty</div>
                            <div className="col-7 d-flex justify-content-end">{data["difficulty"]? data["difficulty"]:"unknown"}</div>
                        </div>
                        { store.session.active && 
                            <div className="row border-bottom p-1 m-0 no-gutters small">
                                <div className="col-6 "><span className="colorRed"><Icon type="github" className="text-danger"/></span><span className="ml-1">Repository:</span></div>
                                <div className="col-6 d-flex justify-content-end ">{data["repository"]? <a target="_blank" href={data["repository"]}>Click to open</a>:"Not available"}</div>
                            </div>
                        }
                        <div className="row border-bottom p-1 m-0 no-gutters small">
                            <div className="col-6 "><span className="colorRed"><Icon type="youtube" className="text-danger"/></span><span className="ml-1">Video Solutions:</span></div>
                            <div className="col-6 d-flex justify-content-end ">{data["video-solutions"]?"Available":"Not available"}</div>
                        </div>
                        <div className="row border-bottom p-1 m-0 no-gutters small">
                            <div className="col-7 "><span ><Icon type="check" className="font-size" /></span><span className="ml-2">Auto grading:</span></div>
                            <div className="col-5 d-flex justify-content-end ">{data["graded"]?"Available":"Not available"}</div>
                        </div>
                        <div className="row border-bottom p-1 m-0 no-gutters small">
                            <div className="col-8 "><span><Icon type="clock" /></span><span className="ml-1">Average duration:</span></div>
                            <div className="col-4 d-flex justify-content-end">{data.duration} hr</div>
                        </div>
                        <div className="row border-bottom p-1 m-0 no-gutters small">
                            <div className="col-5"><span><Icon type="code" /></span><span className="ml-1">Language:</span></div>
                            <div className="col-7 d-flex justify-content-end ">{data.language || data.compiler}</div>
                        </div>
                        <div className="row p-1 m-0 no-gutters small">
                            <div className="col-12 mb-2">Tags: </div>
                            <div className="col-12">
                                <ul className="list list-unstyled row ml-0">
                                {data.tags?data.tags.map((t,i)=>{
                                        return(
                                        <li key={i} className="list-item col-6 mb-0">{t}</li>
                                        );
                                }):"No tags available"}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default withLocation(ExerciseDetails);