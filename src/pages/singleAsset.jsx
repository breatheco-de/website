import React from 'react';
import { Icon } from "@breathecode/ui-components";
import withLocation from "../components/withLocation";

class SingleAsset extends React.Component {
    render() {
         const { pageContext, search } = this.props;
         console.log(this.props);

        return (
        <React.Fragment>
            <div className="container-fluid">
                 <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12">
                                Github Cheat sheet assets
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                            ASSET PICTURE
                            </div>
                            <div className="col-12 col-md-6">
                            Asset description
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card ">
                                            <div className="card-body text-left">
                                                <h5 className="card-title font-weight-bold lead h4">Goal</h5>
                                                <p className="card-subtitle mb-2 text-muted font-italic mb-3">
                                                Description
                                                </p>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-5 ">Type</div>
                                                    <div className="col-7 d-flex justify-content-end">Types text</div>
                                                </div>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-6 "><span className="colorRed"><Icon type="youtube" className="text-danger"/></span><span className="ml-1">Publish Date:</span></div>
                                                    <div className="col-6 d-flex justify-content-end ">publish Date</div>
                                                </div>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-7 "><span ><Icon type="play" className="text-danger font-size" /></span><span className="ml-2">Upvotes</span></div>
                                                    <div className="col-5 d-flex justify-content-end ">upvotes text</div>
                                                </div>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-5"><span><Icon type="code" /></span><span className="ml-1">Technologies:</span></div>
                                                    <div className="col-7 d-flex justify-content-end ">Technologies</div>
                                                </div>
                                                <div className="row p-1 m-0 no-gutters small">
                                                    <div className="col-12 mb-2">Topics: </div>
                                                    <div className="col-12">
                                                        <ul className="list list-unstyled row ml-0">
                                                        topic list
                                                        {/*pageContext.talents?pageContext.talents.map((t,i)=>{
                                                                return(
                                                                <li key={i} className="list-item col-6 mb-0">{t.badge}</li>
                                                                );
                                                        }):""*/}
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="row text-center">
                                                    <div className="col-6">
                                                        <a

                                                            className="btn btn-outline-primary btn-md px-4 w-100 ">
                                                            Live Demo
                                                        </a>

                                                    </div>
                                                    <div className="col-6">

                                                        <button

                                                            className="btn btn-outline-success btn-md px-4 w-100 ">
                                                            Watch Video
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                    </div>
                 </div>
            </div>
        </React.Fragment>
        )
    }
}
export default withLocation(SingleAsset);