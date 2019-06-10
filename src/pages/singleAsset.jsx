import React from 'react';
import { Icon } from "@breathecode/ui-components";
import withLocation from "../components/withLocation";
import Navbar from "../components/navbar.jsx";
import {Link} from "gatsby"


class SingleAsset extends React.Component {
    render() {
        const { pageContext } = this.props;
        const imageStyles = {
        backgroundImage: `url("${pageContext.preview}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };
    const singleAsset={
            marginTop:"60px"
        }
    const title={
        color:"black"
    }


        return (
        <React.Fragment>
        <Navbar/>
            <div className="container" style={singleAsset}>
                 <div className="row">
                    <div className="col-12 col-md-6 col-lg-8">
                        <div className="row">
                            <div className="col-12 pl-0">
                                <div className="h1 font-weight-bold text-dark mb-4" style={title}>{pageContext.title}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 vh-100" style={imageStyles}/>

                            <div className="col-12 col-md-6 ">
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="row p-1 sticky-top mt-2">
                            <div className="col text-right">
                                <Link  className="btn btn-outline-secondary btn-lg d-none d-lg-block " to="/assets">
                                        Browse all assets
                                </Link>
                            </div>
                        </div>
                    <div className="row sticky-top">
                        <div className="col">

                                <div className="card ">
                                            <div className="card-body text-left">
                                                <h5 className="card-title font-weight-bold lead h4">Goal</h5>
                                                <p className="card-subtitle mb-2 text-muted font-italic mb-3">
                                                Description
                                                </p>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-5 "><span className=""><Icon type="search" className="text-danger"/></span><span className="ml-1">Type</span></div>
                                                    <div className="col-7 d-flex justify-content-end">{pageContext.types?pageContext.types.map((t)=>t):""}</div>
                                                </div>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-6 "><span className="colorRed"><Icon type="youtube" className="text-danger"/></span><span className="ml-1">Publish Date:</span></div>
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
                                                            className="btn btn-outline-primary btn-md px-1 w-100 ">
                                                            View website
                                                        </a>

                                                    </div>
                                                    <div className="col-6">

                                                        <button

                                                            className="btn btn-outline-success btn-md px-1 w-100 ">
                                                            Download
                                                        </button>

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