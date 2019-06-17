import React from 'react';
import { Icon } from "@breathecode/ui-components";
import withLocation from "../components/withLocation";
import Navbar from "../components/navbar.jsx";
import {Link} from "gatsby"
import "../styles/index.css";


class SingleAsset extends React.Component {
    render() {
        const { pageContext } = this.props;
        const imageStyles_one = {
        backgroundImage: `url("${pageContext.preview}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: "106px"
    };
    const imageStyles_two = {
        backgroundImage: `url("${pageContext.preview}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: "477px"


    };
    const singleAsset={
            marginTop:"60px"
        }
    const title={
        color:"black"
    }
    console.log("page context"+pageContext);

    console.log(pageContext);


        return (

        <React.Fragment>
        <Navbar/>
            <div className="container" style={singleAsset}>
            {/*main row*/}
                 <div className="row">
                    {/*first column */}
                    <div className=" col-12 col-md-6 m-md-2 col-lg-7 col-xl-8  ">
                        <div className="row">
                            <div className="col ">
                                <div className="h3 font-weight-bold text-dark mb-4 assetTitle" style={title}>{pageContext.title}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6">
                                <div className="d-md-block d-lg-none" style={imageStyles_one}></div>
                                 <div className=" d-none d-lg-block" style={imageStyles_two}></div>
                            </div>
                            <div className="col-12 col-md-12  col-lg-6 mt-4 mt-lg-0">
                                {pageContext.description}
                            </div>
                        </div>
                    </div>
                    {/*second columnn*/}
                    <div className="col-12 col-md ">
                        <div className="row p-1 sticky-top mt-2 mt-lg-0">
                            <div className="col text-right px-lg-1">
                                <Link  className="btn btn-outline-secondary btn-lg d-none d-lg-block" to="/assets">
                                        Browse all assets
                                </Link>
                            </div>
                        </div>
                    <div className="row sticky-top">
                        <div className="col p-1">

                                <div className="card m-1">
                                            <div className="card-body text-left">
                                                <h5 className="card-title font-weight-bold lead h4">Goal</h5>
                                                <p className="card-subtitle mb-2 text-muted font-italic mb-3">
                                                {pageContext.description}
                                                </p>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-5 "><span className=""><Icon type="search" className="text-danger"/></span><span className="ml-1">Type</span></div>
                                                    <div className="col-7 d-flex justify-content-end">{pageContext.types?pageContext.types.map((t)=>t):""}</div>
                                                </div>
                                                <div className={`${!pageContext["created_at"]&&"d-none"} row border-bottom p-1 m-0 no-gutters small`}>
                                                    <div className="col-6 "><span className="colorRed"><Icon type="calendarCheck" /></span><span className="ml-1">Publish Date:</span></div>
                                                    <div className="col-6 d-flex justify-content-end ">{pageContext["created_at"]}</div>
                                                </div>
                                                <div className={`row border-bottom p-1 m-0 no-gutters small ${!pageContext["up_votes"]&&"d-none"}`}>
                                                    <div className="col-7 "><span ><Icon type="play" className="text-danger font-size" /></span><span className="ml-2">Upvotes</span></div>
                                                    <div className="col-5 d-flex justify-content-end ">{pageContext["up_votes"]}</div>
                                                </div>

                                                <div className="row p-1 m-0 no-gutters small">
                                                    <div className="col-12 mb-2">Topics: </div>
                                                    <div className="col-12">
                                                        <ul className="list list-unstyled row ml-0">
                                                        {pageContext.topics?pageContext.topics.map((t,i)=>{
                                                                return(
                                                                <li key={i} className="list-item col-6 mb-0">{t}</li>
                                                                );
                                                        }):""}
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="row text-center">
                                                    <div className="col-6">
                                                        <a
                                                            href={pageContext.url}
                                                            className={` ${pageContext.download&&"d-none"} btn btn-outline-primary btn-md px-1 w-100 `}>
                                                            {pageContext.url?pageContext.url.includes("ucarecdn")?"View Asset":"View Website":""}
                                                        </a>

                                                    </div>
                                                    <div className="col-6">

                                                        <a
                                                            href={pageContext.download}
                                                            className={`${!pageContext.download&&"d-none"} btn btn-outline-success btn-md px-1 w-100 `}>
                                                            Download
                                                        </a>

                                                    </div>
                                                </div>
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