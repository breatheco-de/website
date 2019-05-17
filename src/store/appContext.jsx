import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const HOST = 'https://assets.breatheco.de/apis/';

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			fetch(HOST+"lesson/all/v2?status=published,draft")
				.then(res => res.json())
				.then(lessons => {
					let { store } = this.state;
					store.lessons = lessons;
					store.tags = lessons.map(l => l.tags).flat().map(tag => this.state.actions.emojify(tag));
					store.authors = lessons.map(l => l.authors).flat();
					this.setState({
						store
					});
				})
				.catch(err => console.error(err));

			fetch(HOST+"event/all?status=published&location=downtown-miami&status=upcoming")
				.then(res => res.json())
				.then(events => {
					let { store } = this.state;
					store.events = events;
					this.setState({
						store
					});
				})
				.catch(err => console.error(err));

			fetch("https://raw.githubusercontent.com/breatheco-de/main-documentation/master/README.md")
				.then(res => res.text())
				.then(markdown => {
					let { store } = this.state;
					store.markdown = markdown;
					this.setState({
						store
					});
				})
				.catch(err => console.error(err));
			fetch("https://assets.breatheco.de/apis/github/issues/all")
				.then(res => res.json())
				.then(issues => {
					let { store } = this.state;
					store.issues = issues;
					store.allIssues =  [];
					for(let key in issues){
					    const aux = store.allIssues.concat(issues[key]);
					    store.allIssues = aux.map(i => Object.assign(i, {
					    	labels: i.labels.map((l => Object.assign(l, {
					    		name: this.state.actions.emojify(l.name)
					    	})))
					    }));
					    store.issueLabels = this.state.actions.filterRepeated(this.state.actions.getLabels(aux));
					}


					this.setState({
						store
					});
				})
				.catch(err => console.error(err));
             fetch(HOST+"resources/all")
				.then(res => res.json())
				.then(assets => {
					let { store } = this.state;
					store.assets = assets;
                    store.assetTypesTags = this.state.actions.filterRepeated(assets.map(a=>a.types).flat(1));
                    store.assetTechnologieTags=this.state.actions.filterRepeated(assets.map(a=>a.technologies).flat(1));
                    store.assetTopicTags = this.state.actions.filterRepeated(assets.map(a=>a.topics).flat(1));
					this.setState({
						store
					});
				})
				.catch(err => console.error(err));

		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
