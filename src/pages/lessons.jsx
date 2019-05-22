import React from "react";
import { SmallJumbotron } from "../components/smalljumbo.jsx";
import { Filter, Loading } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";
import Store from "../store/appContext.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import "@breathecode/ui-components/dist/main.css";
import Layout from "../components/layout"


export class Lessons extends React.Component {
	constructor() {
		super();
		this.state = {
            selectedLanguages:[],
			selectedTags: [],
			selectedAuthors: [],
            changeAsset:false,
            changeLesson:false,
            displayLesson:false,
            displayAssets:true,
            selectedTypeTags:[],
            selectedTechTags:[],
            selectedTopicTags:[]
		};
	}

	filterByLang = l => {
		if (this.state.selectedLanguages.length == 0) return true;
		for (let i = 0; i < this.state.selectedLanguages.length; i++) {
			if (l.lang.includes(this.state.selectedLanguages[i].value)) return true;
		}
		return false;
	}
    filterByTags = l => {
		if (this.state.selectedTags.length == 0) return true;
		for (let i = 0; i < this.state.selectedTags.length; i++) {
			if (l.tags.includes(this.state.selectedTags[i].value)) return true;
		}
		return false;
	}
	filterByAuthors = l => {
		if (this.state.selectedAuthors.length == 0) return true;
		for (let i = 0; i < this.state.selectedAuthors.length; i++) {
			if (l.authors == null) {
				return false;
			}
			if (l.authors.includes(this.state.selectedAuthors[i].value)) return true;
		}
		return false;
	};
    replaceDraft = lessonLink =>{
            if (lessonLink.includes("[draft]")&&lessonLink.includes("/en/")){
                let newLink = lessonLink.replace("[draft]","");
                return newLink;
            }
            else{
                return lessonLink
            }
    };
    filterByTech = asset => {
		if (this.state.selectedTechTags.length == 0) return true;
		for (let i = 0; i < this.state.selectedTechTags.length; i++) {
			if (asset.technologies.includes(this.state.selectedTechTags[i].value)) return true;
		}
		return false;
	}
    filterByTopic = asset => {
		if (this.state.selectedTopicTags.length == 0) return true;
		for (let i = 0; i < this.state.selectedTopicTags.length; i++) {
			if (asset.topics.includes(this.state.selectedTopicTags[i].value)) return true;
		}
		return false;
	}
    filterByType = asset => {
		if (this.state.selectedTypeTags.length == 0) return true;
		for (let i = 0; i < this.state.selectedTypeTags.length; i++) {
			if (asset.types!==null?asset.types.includes(this.state.selectedTypeTags[i].value):"") return true;
		}
		return false;
	}


	render() {
        const lessons =(<Context.Consumer>
					{({ store, actions }) => {
                        console.log(store.lessonLanguage);
						return (
							<div className={`${this.state.displayLesson&&"d-none"}`}>
								<SmallJumbotron
									jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
									containerClass="pl-4  container"
									headerClass="headerSizeResponsive display-4  font-weight-bold  text-left"
									headerText="Lessons Published"
									pClass="lead  text-left"
									pContent="the following lessons explain different programing
										concepts and have been published by breathe code
										members, search for a partiulars lesson using the
										filters bellow"
                                    spanClass="h3 text-secondary"
                                    spanContent="md"
								/>
								<div className="row sticky-top bg-white border-top border-bottom fontSize">
									<div className="container">
										<div className="row">
											<div className="col-12  d-flex justify-content-start">
                                                <div className="px-1 py-2">
                                                    <div className="btn-group">
                                                        <a
                                                        onClick={() => {
                                                            this.setState({
                                                                changeLesson: !this.state.changeLesson,
                                                            });
                                                        }}

                                                        className="ml-2 text-secondary  dropdown-toggle postion-absolute pt-2 m-0 active"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        >
                                                            Lessons
                                                        </a>
                                                        <div className={`mt-3 dropdown-menu ${this.state.changeLesson&&"show"}`}>
                                                            <button
                                                                class="dropdown-item"
                                                                type="button"
                                                                onClick={() => {
                                                                this.setState({
                                                                    displayAssets: false,
                                                                    displayLesson:true,
                                                                    changeLesson:false,

                                                                });
                                                                }}
                                                            >
                                                            Assets
                                                            </button>
                                                            <button
                                                                class="dropdown-item"
                                                                type="button"
                                                                onClick={() => {
                                                                this.setState({
                                                                    displayLesson: false,
                                                                    displayAssets:true,
                                                                    changeLesson:false,
                                                                });
                                                                }}
                                                            >
                                                            Lessons
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
												<div className="px-1 py-2">
													<Filter
														label="Tags"
														placeholder="Filter by topic"
                                                        className="minWidth"
														onChange={d =>
															this.setState({
																selectedTags: d
															})
														}
															options={store.tags?actions.filterRepeated(store.tags).map((tag, index) => {
															return {
																label: tag,
																value: tag
															};
														}):<Loading/>}

													/>
												</div>
                                                <div className="px-1 py-2">
													<Filter
														label="Language"
														placeholder="Filter by language"
                                                        className="minWidth"
														onChange={d =>

															this.setState({
																selectedLanguages: d
															})
														}
															options={store.lessonLanguage?actions.filterRepeated(store.lessonLanguage).map((lan, index) => {
															return {
																label: lan,
																value: lan
															};
														}):[{
																label: <Loading/>,
																value: <Loading/>
															}]}

													/>
												</div>
												<div className="px-1 pl-1 py-2">
													<Filter
														label="Author"
														placeholder="Filter by author"
														onChange={d =>
															this.setState({
																selectedAuthors: d
															})
														}
														options={actions.filterRepeated(store.authors).map(author => {
															return {
																label: author,
																value: author
															};
														})}
														withToggler={false}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>

								{store.lessons == null ? <Loading /> : store.lessons
                                    .filter(this.filterByLang)
									.filter(this.filterByAuthors)
									.filter(this.filterByTags)
									.map((lesson, index) => {
										return (
											<div className="container" key={index}>
												<div className="row">
													<div className="col-12  py-2 pl-2">
														<div className="pl-3">
															<a
																target="_blank"
																className="h2 text-dark btn-default"
																href={this.replaceDraft(actions.lessonUrl(lesson))}>
																{lesson.title}
															</a>
															<div className={`row ${!lesson.authors&&"mb-2"}`}>
																{lesson.authors&&<div className="col py-2 text-dark">
																	{lesson.authors && "Contributors: "}
																	{lesson.authors && lesson.authors.map((a,k) => (<a
																		href={`https://github.com/${a}`}
																		target="_blank"
																		key={k}
																		className="author badge badge-pill badge-light mr-2">@{a}</a>))}
																</div>}
															</div>
															<p className="lead text-dark ">{lesson.subtitle}</p>
															<div className="row ">
                                                                <div className="col pl-1">
																{lesson.tags.map((tag, index) => {
																	return (
																		<div
																			key={index}
																			className="author badge badge-pill badge-light mr-2">
																			{tag}
																		</div>
																	);
																})}
                                                                </div>
                                                                <a href={this.replaceDraft(actions.lessonUrl(lesson))}  className="btn btn-outline-primary ml-auto mr-3">Read lesson</a>
															</div>
														</div>
													</div>
												</div>
												<hr className="my-4 ml-2" />
											</div>
										);
									})}
							</div>
						);
					}}
				</Context.Consumer>);
        const aseets=(
            <Context.Consumer>
					{({ store, actions }) => {
                        console.log(store.assetTypesTags);
                        console.log(store.assetTechnologieTags);
                        console.log(store.assetTopicTags);
						return (
							<div className={`${this.state.displayAssets&&"d-none"}`}>
								<SmallJumbotron
									jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
									containerClass="pl-4  container"
									headerClass="headerSizeResponsive display-md-4 font-weight-bold  text-left"
									headerText="Assets"
									pClass="lead  text-left"
									spanClass="h3 text-secondary"
									spanContent="md"
								/>

								<div className="row border-top border-bottom sticky-top bg-white fontSize">
									<div className="container">
										<div className="row">
											<div className="col  d-flex justify-content-start">
                                                <div className="px-1 pl-1 py-2">
                                                    <div className="btn-group">
                                                        <a
                                                        onClick={() => {
                                                            this.setState({
                                                                changeAsset: !this.state.changeAsset
                                                            });
                                                        }}

                                                        className="ml-1 text-secondary  dropdown-toggle postion-absolute pt-2 m-0 active"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">
                                                            Assets
                                                        </a>
                                                        <div className={`mt-3 dropdown-menu ${this.state.changeAsset&&"show"}`}>
                                                            <button
                                                                class="dropdown-item"
                                                                type="button"
                                                                onClick={() => {
                                                                this.setState({
                                                                    displayAssets: false,
                                                                    displayLesson:true,
                                                                    changeAsset:false,

                                                                });
                                                                }}
                                                            >
                                                            Assets
                                                            </button>
                                                            <button
                                                                class="dropdown-item"
                                                                type="button"
                                                                onClick={() => {
                                                                this.setState({
                                                                    displayLesson: false,
                                                                    displayAssets:true,
                                                                    changeAsset:false,
                                                                });
                                                                }}
                                                            >
                                                            Lessons
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
												<div className="px-1 pl-1 py-2">
													<Filter
													label="technologie"

													placeholder="Filter By Technologie"
													onChange={d =>
														this.setState({
															selectedTechTags: d
														})
													}
													options={store.assetTechnologieTags?store.assetTechnologieTags.map((tech)=>{
                                                        return{
                                                                label: tech,
																value: tech
                                                        }
                                                    }):[{
                                                                label:"loading" ,
																value: "loading"
                                                        }]}
												    />
												</div>
                                                <div className="px-1 pl-1 py-2">
													<Filter
													label="Topic"
													placeholder="Filter By Topic"
													onChange={d =>
														this.setState({
															selectedTopicTags: d
														})
													}
													options={store.assetTopicTags?store.assetTopicTags.map((topic)=>{
                                                        return{
                                                                label: topic,
																value: topic
                                                        }
                                                    }):[{
                                                                label:"loading" ,
																value: "loading"
                                                        }]}
												    />
												</div>
                                                <div className="px-1 pl-1 py-2">
													<Filter
													label="Topic"
													placeholder="Filter By Type"
													onChange={d =>
														this.setState({
															selectedTypeTags: d
														})
													}
													options={store.assetTypesTags?store.assetTypesTags.map((type)=>{
                                                        return{
                                                                label: type,
																value: type
                                                        }
                                                    }):[{
                                                                label:"loading" ,
																value: "loading"
                                                        }]}
												    />
												</div>
											</div>
										</div>
									</div>
								</div>
                                  <div className="container">
                                 {store.assets?store.assets.filter(this.filterByTech).filter(this.filterByTopic).filter(this.filterByType).map((asset)=>{
                                                const imageStyles = {
                                                    backgroundImage: `url("${asset.preview}")`,
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'cover',
                                                };
                                     return(
                                <div >
                                    <div className="pl-2">
                                        <div className="row  text-center text-md-left mt-2  p-2 paddingLeftZero">
                                            <div className="col-12 col-md-2 d-flex justify-content-center align-items-center" style={imageStyles}>

                                            </div>
                                            <div className="col-12 col-md p-3">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div><a href={asset.url?asset.url:""} className=" h2 text-dark">{asset.title?asset.title:"missing title"}</a></div>
                                                    </div>
                                                </div>

                                                <div className="row mb-2">
                                                    <div className="col-12 p-2 col-md">
                                                        {asset.technologies?asset.technologies.map((tech)=>{
                                                                return(
                                                                    <span className="author badge badge-pill badge-light mr-2"> {tech}</span>
                                                                )
                                                            }):" "}
                                                    </div>
                                                    <div className="col-12 col-md-3 d-flex justify-content-md-end">
                                                        <div className="row mx-auto">
                                                            <div className="col-12 d-flex align-items-end">
                                                                <a href={asset.url?asset.url:""} className="btn btn-outline-primary buttonHeight  px-2 ">
                                                                    View more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    </div>
                                     );
                                 }):<Loading/>}

                                </div>
							</div>
						);
					}}
				</Context.Consumer>
        );
		return (
            <Layout>
                <Navbar/>
                    {lessons}
                    {aseets}
                <Footer/>
            </Layout>

		);
	}
}

export default Store(Lessons)