import React from "react";
import { SmallJumbotron } from "../smalljumbo.jsx";
import { Filter, Loading, Icon } from "@breathecode/ui-components";
import { Context, Store } from "../../store/context.js";
import "@breathecode/ui-components/dist/main.css";
import Layout from "../layout";
import Helmett from "../helmet";
import { navigate } from '@reach/router';
import emoji from 'node-emoji';
import qs from "query-string";
import { useLocalStorage } from "../../utils/useLocalStorage.js";



const flag ={
    margin: "1px 0px"
}

export class Lessons extends React.Component {
	constructor(props) {
		super(props);
        const { location } = props;

		this.state = {
            defaultLanguages: [location.search.includes("lang=") ? this.getLanguage(location.search) :"en"],
			defaultTags: location.search.includes("topics=") ? this.getTopics(location.search) :[],
            defaultAuthor:location.search.includes("authors=") ? this.getAuthors(location.search) :[],
            selectedLanguages:[],
            selectedTags: [],
			selectedAuthors: [],
            changeAsset:false,
            changeLesson:false,
            displayLesson:false,
            displayAssets:true,
            selectedTypeTags:[],
            selectedTechTags:[],
            selectedTopicTags:[],
            assetDefaultTechTags:location.search.includes("technologies=") ? this.getTechnologies(location.search) :[],
            assetByDefaultTopicTags:location.search.includes("assetTopics=") ? this.getAssetTopics(location.search) :[],
            assetsByDefaultType: location.search.includes("assetType=") ? this.getAssetType(location.search) :[],
		};


	}
    filterByDefaultType = asset => {
		if (this.state.assetsByDefaultType.length === 0) return true;
		for (let i = 0; i < this.state.assetsByDefaultType.length; i++) {
			if (asset.types!==null?asset.types.includes(this.state.assetsByDefaultType[i]):"") return true;
		}
		return false;
	}
    filterByDefaultTopic = asset => {
		if (this.state.assetByDefaultTopicTags.length === 0) return true;
		for (let i = 0; i < this.state.assetByDefaultTopicTags.length; i++) {
			if (asset.topics.includes(this.state.assetByDefaultTopicTags[i])) return true;
		}
		return false;
	}
    filterByDefaultTech = asset => {
		if (this.state.assetDefaultTechTags.length === 0) return true;

		for (let i = 0; i < this.state.assetDefaultTechTags.length; i++) {

			if (asset.technologies.includes(this.state.assetDefaultTechTags[i])) return true;

		}

		return false;
	}
    getTechnologies=(queryString)=>{
        let params = qs.parse(queryString);
        let technologies = params.technologies.split(",");
        return technologies;
    }
    getAssetType=(queryString)=>{
        let params = qs.parse(queryString);
        let assetType = params.assetType.split(",");
        return assetType;
    }

    updateQueryStringParameter=(uri, key, value)=> {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            return uri + separator + key + "=" + value;
        }
    }

    getLanguage=(queryString)=>{
        let params = qs.parse(queryString);
        let lang = params.lang;
        return lang;

    }
    getAssetTopics=(queryString)=>{
        let params = qs.parse(queryString);
        let topics = params.assetTopics.split(",");
        return topics;
    }

    getTopics=(queryString)=>{
        let params = qs.parse(queryString);
        let topics = params.topics.split(",");
        return topics;
    }

    getAuthors=(queryString)=>{
        let params = qs.parse(queryString);
        let authors = params.authors.split(",");
        return authors;
    }
    getTechnologies=(queryString)=>{
        let params = qs.parse(queryString);
        let technologies = params.technologies.split(",");
        return technologies;
    }



    filterByDefaultLang = l => {
		if (this.state.defaultLanguages.length === 0) return true;

		for (let i = 0; i < this.state.defaultLanguages.length; i++) {
			if (l.lang?l.lang.includes(this.state.defaultLanguages[i]):"") return true;
		}
		return false;
	}

    filterByDefaultTags = l => {
		if (this.state.defaultTags.length === 0) return true;
		for (let i = 0; i < this.state.defaultTags.length; i++) {
			if (l.tags.map(t=>t).includes(this.state.defaultTags[i])) return true;
		}
		return false;
	}

     filterByDefaultAuthor = l => {
		if (this.state.defaultAuthor.length === 0) return true;
		for (let i = 0; i < this.state.defaultAuthor.length; i++) {
			if (l.authors === null) {
				return false;
			}
			if (l.authors.includes(this.state.defaultAuthor[i])) return true;
		}
		return false;
	}


	filterByLang = l => {
		if (this.state.selectedLanguages.length === 0) return true;
		for (let i = 0; i < this.state.selectedLanguages.length; i++) {
			if (l.lang?l.lang.includes(this.state.selectedLanguages[i].value):"") return true;
		}
		return false;
	}

    filterByTags = l => {
		if (this.state.selectedTags.length === 0) return true;
		for (let i = 0; i < this.state.selectedTags.length; i++) {
			if (l.tags.map(t=>t).includes(this.state.selectedTags[i].value)) return true;
		}
		return false;
	}
	filterByAuthors = l => {
		if (this.state.selectedAuthors.length === 0) return true;
		for (let i = 0; i < this.state.selectedAuthors.length; i++) {
			if (l.authors === null) {
				return false;
			}
			if (l.authors.includes(this.state.selectedAuthors[i].value)) return true;
		}
		return false;
	}
    replaceDraft = lessonLink =>{
            if(lessonLink){
                if (lessonLink.includes("[draft]")&&lessonLink.includes("/en/")){
                let newLink = lessonLink.replace("[draft]","");
                return newLink;
            }
            else{
                return lessonLink
            }
            }

    }
    filterByTech = asset => {
		if (this.state.selectedTechTags.length === 0) return true;
		for (let i = 0; i < this.state.selectedTechTags.length; i++) {
			if (asset.technologies.includes(this.state.selectedTechTags[i].value)) return true;
		}
		return false;
	}
    filterByTopic = asset => {
		if (this.state.selectedTopicTags.length === 0) return true;
		for (let i = 0; i < this.state.selectedTopicTags.length; i++) {
			if (asset.topics.includes(this.state.selectedTopicTags[i].value)) return true;
		}
		return false;
	}
    filterByType = asset => {
		if (this.state.selectedTypeTags.length === 0) return true;
		for (let i = 0; i < this.state.selectedTypeTags.length; i++) {
			if (asset.types!==null?asset.types.includes(this.state.selectedTypeTags[i].value):"") return true;
		}
		return false;
	}
    emojify= (tag) => emoji.emojify(tag, (name) => {
        if(name==='spiral_notepad') return "🗒";
        return name;
    });


	render() {

        const {location, pageContext } =this.props;
        const lessonData = (Array.isArray(pageContext.lessons)) ? pageContext.lessons : [];
        
		return (
            <Layout>
                <Context.Consumer>
                    {({ store, actions }) => {

                        return (

                            <div className={`${this.state.displayLesson&&"d-none"}`}>
                                <Helmett
                                    title="BreatheCode | Lessons"
                                    description="the following lessons explain different programing concepts and have been published by BreatheCode members, use the filters bellow to narrow your search:"
                                    url="https://breatheco.de/lessons"
                                    image="https://ucarecdn.com/717ad4fe-f186-44aa-872a-dd04584e4da0/logobcode.png"
                                />
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
                                <div className="rowFontSize row sticky-top bg-white border-top border-bottom fontSize">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12  d-flex justify-content-start">
                                                <div className="px-1 py-2">
                                                    <Filter
                                                        label="Tags"
                                                        placeholder="Filter by topic"
                                                        className="minWidth topicFilterPostion"
                                                        onChange={d =>  {
                                                            this.setState({
                                                                selectedTags: d
                                                            });

                                                            if(d)navigate("/lessons" + this.updateQueryStringParameter(location.search,"topics",d.map(o => o.value).join(',')) );
                                                        }}
                                                            options={(() => {
                                                                if(Array.isArray(lessonData)){
                                                                    const lessonsTags = lessonData.map(l => l.tags);
                                                                    const tags = [].concat.apply([], lessonsTags)
                                                                    return actions.filterRepeated(tags.map(tag => this.emojify(tag))).map((tag, index) => {
                                                                        return {
                                                                            label: tag,
                                                                            value: tag
                                                                        };
                                                                    });
                                                                }
                                                                else{
                                                                    return <Loading/>;
                                                                }
                                                            })()}
                                                    />
                                                </div>
                                                <div className="px-1 py-2">
                                                    <Filter
                                                        label="Language"
                                                        placeholder="Filter by language"
                                                        defaultValue={this.state.defaultLanguages}
                                                        className="minWidth languageFilterPosition"
                                                        optionComponent={({ selected, onSelect, onDeselect, data }) =>
                                                        <li className={(selected) ? "selected" : ""} onClick={() => selected ? onDeselect(data) : onSelect(data)}>
                                                            { (data.value === "es") ?
                                                                <span>ES <img className="mb-1" style={flag} src="https://ucarecdn.com/6f04f93e-1971-4e14-b730-94fad8254693/-/resize/18x/"/></span>
                                                                :
                                                                <span>EN <img className="mb-1" style={flag} src="https://ucarecdn.com/ec2f5da2-1e3d-4a0c-886c-255417a1c529/-/resize/18x/"/></span>
                                                            }
                                                            { selected && <Icon type="times" />}
                                                        </li>}
                                                        multiselect={false}
                                                        onChange={d =>  {
                                                            this.setState({
                                                                selectedLanguages: d,
                                                                defaultLanguages: ""
                                                            });

                                                            if(d)navigate("/lessons" + this.updateQueryStringParameter(location.search,"lang",d.value));

                                                        }}
                                                        options={pageContext ? actions.filterRepeated(lessonData.map(l=>l.lang)).map((lan, index) => {
                                                            return {
                                                                label:  lan,
                                                                value: lan
                                                            };
                                                        })
                                                        :
                                                        [{
                                                            label: <Loading/>,
                                                            value: null
                                                        }]}

                                                    />
                                                </div>
                                                <div className="px-1 pl-1 py-2">
                                                    <Filter
                                                        label="Author"
                                                        placeholder="Filter by author"
                                                        className="authorFilterPosition"
                                                        onChange=
                                                        {d =>  {
                                                            this.setState({
                                                                selectedAuthors: d
                                                            });
                                                            if(d)navigate("/lessons" + this.updateQueryStringParameter(location.search,"authors",d.map(o => o.value).join(',')) );
                                                        }}
                                                        options={pageContext.authors.map(author => {
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

                                {pageContext === null ? <Loading /> : lessonData
                                    .filter(this.filterByDefaultAuthor)
                                    .filter(this.filterByDefaultTags)
                                    .filter(this.filterByDefaultLang)
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
                                                                    <div
                                                                            key={index}
                                                                            className="author badge badge-pill badge-light mr-2 text-uppercase">
                                                                            {lesson.lang} {lesson.lang==="es"?<span><img className="mb-1" style={flag} src="https://ucarecdn.com/6f04f93e-1971-4e14-b730-94fad8254693/-/resize/18x/"/></span>:<span><img className="mb-1" style={flag} src="https://ucarecdn.com/ec2f5da2-1e3d-4a0c-886c-255417a1c529/-/resize/18x/"/></span>}
                                                                    </div>
                                                                {lesson.tags?lesson.tags.map((tag, index) => {
                                                                    return (
                                                                        <div
                                                                            key={index}
                                                                            className="author badge badge-pill badge-light mr-2">
                                                                            {tag}
                                                                        </div>
                                                                    );
                                                                }):""}
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
                </Context.Consumer>
            </Layout>

		);
	}
}

export default Store(Lessons)