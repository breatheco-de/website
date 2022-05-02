import React from "react";
import { Link } from "gatsby";
import { MarkdownParser, Icon } from "@breathecode/ui-components";
import "../styles/home.css";
import withLocation from "../components/withLocation";
import LanguageSwitcher from "../components/projectsPage/language";
import Iframe from "../components/projectsPage/iframe";
import Layout from "../components/projectsPage/layout";
import usSvg from "../images/us.svg";
import esSvg from "../images/es.svg";

const langSvg = {
    'us': usSvg,
    'es': esSvg,
}

class Single extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showVideo: false,
            context: this.props.pageContext,
            markdown: this.props.pageContext.markdown,
            lang: null
        }
    }

    getReadme(_lang=null){
        const { pageContext } = this.props;
        _lang = _lang || this.state.lang || this.props.search.lang || "us";
        // const readmeURL = `${this.state.context.readme_url.substr(0, this.state.context.readme_url.lastIndexOf('.'))}${_lang === "es" ? ".es.md" : ".md"}`
        const readmeURL = `https://breathecode.herokuapp.com/v1/registry/asset/${pageContext.translations_slug[_lang]}.md`;

        fetch(readmeURL)
            .then(resp => resp.text())
            .then(data => {
                this.setState({ markdown: data, lang: _lang })
            })
            .catch(err => {
                console.error("Error loading markdown file from github",err);
            });
    }

    componentDidMount(){

        if(typeof(markdown) !== 'string'){
            this.getReadme();
        }

        const configUrl = `${process.env.GATSBY_API_URL}/registry/asset/${this.state.context.slug}/github/config`
        fetch(configUrl)
            .then(resp => resp.json())
            .then(data => {
                const context = { ...this.state.context, data };
                console.log("Merged context ", data, this.state.context, context)
                this.setState({ ...this.state, context })
            })
            .catch(err => {
                console.error("Error loading learn.json file from github",err);
                console.error(err);
            });
    }
    
    render(){
        const { search } = this.props;

        const fromIframe = (search.iframe === 'true');

        console.log("this.state.context::::::", this.state.context)
        return(
            <React.Fragment>
            <LanguageSwitcher 
                current={this.state.lang ? this.state.lang : "us"} translations={this.state.context.translations} 
                onClick={(lang) => this.getReadme(lang)}
            />
            <div className="fontFamily">
                { this.state.showVideo && <Iframe
                        onLoad={() => window.scrollTo(0,0)}
                        title={`Video tutorial for ${this.state.context.title}`}
                        src={`https://assets.breatheco.de/apps/video/?slug=${this.state.context.slug}`}
                        height="60vh"
                    />
                }
                <Layout disableNavbar meta={this.state.context}>
                    <div className="container fontFamily single-project">
                        <div className="row">
                            <article className="col-12 col-md-6 col-lg-6 col-xl-7 order-2 order-md-1">
                                <MarkdownParser source={this.state.markdown} />
                            </article>
                            <div className="col-12 col-md-6 col-lg- col-xl-5 order-1 order-md-2 mb-3">
                            { !fromIframe &&
                                <div className="row p-1 sticky-top mt-2">
                                    <div className="col text-right">
                                        <Link  className="btn btn-outline-secondary btn-lg d-none d-lg-block " to="/projects">
                                            Browse all projects
                                        </Link>
                                    </div>
                                </div>
                            }
                                <div className="row p-1 sticky-top mt-2">
                                    <div className="col">
                                        <div className="card w-100">
                                            <div className="card-body text-left">
                                                <h5 className="card-title font-weight-bold lead h4">Goal</h5>
                                                <p className="card-subtitle mb-2 text-muted font-italic mb-3">
                                                {this.state.context.description}
                                                </p>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-5 ">Difficulty</div>
                                                    <div className="col-7 d-flex justify-content-end">{this.state.context.difficulty}</div>
                                                </div>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-6 "><span ><Icon type="github"/></span><span className="ml-1">Repository:</span></div>
                                                    <div className="col-6 d-flex justify-content-end ">{this.state.context["url"]? <a target="_blank" href={this.state.context["url"]} rel="noopener noreferrer">Click to open</a>:"Not available"}</div>
                                                </div>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-6 "><span className="colorRed"><Icon type="youtube" className="text-danger"/></span><span className="ml-1">Video available:</span></div>
                                                    <div className="col-6 d-flex justify-content-end ">{this.state.context["solution_video_url"]?"Available":"Not available"}</div>
                                                </div>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-7 "><span ><Icon type="play" className="text-danger font-size" /></span><span className="ml-2">Live demo available:</span></div>
                                                    <div className="col-5 d-flex justify-content-end ">{this.state.context["live-url"]?"Available":"Not available"}</div>
                                                </div>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-8 "><span><Icon type="clock" /></span><span className="ml-1">Project average duration:</span></div>
                                                    <div className="col-4 d-flex justify-content-end">{this.state.context.duration} hr</div>
                                                </div>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-5"><span><Icon type="code" /></span><span className="ml-1">Technologies:</span></div>
                                                    
                                                    <div className="pl-3 pt-2 pb-2 col-12 row d-flex ">{this.state.context.technologies.map((technology, i) => {
                                                        return <p key={i} className="font-weight-bold p-0 mt-0 mb-1 col-4">{`${technology}`}</p>
                                                    } )}</div>
                                                    {/* <div className="col-7 d-flex justify-content-end ">{this.state.context.technology}</div> */}
                                                </div>
                                                <div className="row p-1 m-0 no-gutters small">
                                                    <div className="col-5"><span role="img" aria-label="Earth">🌎</span><span className="ml-1">Translations:</span></div>
                                                    <div className="col-7 d-flex justify-content-end ">
                                                        <ul className="d-inline">
                                                        {this.state.context.translations.map(l => {
                                                        console.log(l, 'l');    
                                                        return(<li key={l}><img style={{ height: "15px"}} className="rounded" 
                                                        alt="single project img" 
                                                        src={langSvg[l]} /></li>)})}
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* <div className="row p-1 m-0 no-gutters small">
                                                    <div className="col-12 mb-2">Skills: </div>
                                                    <div className="col-12">
                                                        <ul className="list list-unstyled row ml-0">
                                                        {this.state.context.talents?this.state.context.talents.map((t,i)=>{
                                                                return(
                                                                <li key={i} className="list-item col-6 mb-0">{t.badge}</li>
                                                                );
                                                        }):""}
                                                        </ul>
                                                    </div>
                                                </div> */}

                                                <div className="row text-center">
                                                    {this.state.context.demo && 
                                                        <div className="col">
                                                            <a
                                                                href={this.state.context.demo}
                                                                className="btn btn-outline-primary btn-md px-4 w-100 ">
                                                                Live Demo
                                                            </a>
                                                        </div>
                                                    }
                                        {/* TODO: SHOWVIDEO deberia ser un <anchor href="" class/> */}
                                                    {this.state.context["solution_video_url"] &&
                                                        <div className="col">
                                                            <button
                                                                onClick={() => window.open(this.state.context["solution_video_url"])}
                                                                // onClick={() => {
                                                                //     if (this.state.context["solution_video_url"].match(/http(s?):\/\/.+/)){
                                                                //         window.open(this.state.context["solution_video_url"]);
                                                                //     }
                                                                //     else{
                                                                //         this.setState({ showVideo: true });
                                                                //     }
                                                                // }}
                                                                className="btn btn-outline-success btn-md px-4 w-100 ">
                                                                Watch Video Tutorial
                                                            </button>
                                                        </div>
                                                    }
                                                    {this.state.context["url"] &&
                                                        <div className="col">
                                                            <button
                                                                onClick={() => window.open(this.state.context["url"])}
                                                                className="btn btn-light btn-md px-4 w-100 ">
                                                                <Icon type="github"/> Contribute
                                                            </button>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Layout>
                </div>
            </React.Fragment>
        );
    }
}
export default withLocation(Single);