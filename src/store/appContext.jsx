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
