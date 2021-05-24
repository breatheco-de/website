import React, {createContext, useState, useEffect} from "react";
import getState from "./store.js";
import withLocation from "../components/withLocation";
// import { Notifier, Notify } from "bc-react-notifier";

export const Context = createContext(null);

export const Store = Component => {
    const SessionComponent = (props) => {
        const [state, _setState] = useState(getState({
            getStore: () => typeof window !== 'undefined' ?
                JSON.parse(localStorage.getItem("bc-website-store")) || state.store
                :
                state.store,
            getActions: () => state.actions,
            setStore: updatedStore => {
                const oldStore = state.actions.getStore();
                const newStore = {...oldStore, ...updatedStore };
                if(typeof window !== 'undefined') localStorage.setItem("bc-website-store", JSON.stringify(newStore));
                _setState({ ...state, store: newStore });
            }
        }));
        //get ip address
        useEffect(() => {
            const { actions } = state;
            const store = actions.getStore();

            if(!store.session.v4) actions.startSession({
                location: props.location
            });
			if(!store.events) actions.loadEvents();
            if(!store.allIssues) actions.loadIssues();

        }, []);

        
        
        // Error: Problem with "window" when run builds on SSR 
        // Projects PAGE
        // useEffect(() => {
        //     console.log("v1.0");
        //     fetch("https://projects.breatheco.de/json")
        //     .then(res => res.json())
        //     .then(json => {
        //         let { store } = state;
        //         store.project = json;
        //         store.technologiesTags= json.map((p)=>p.technology)

        //         _setState({
        //             store
        //         });
        //     })
        //     // .catch(err => Notify.error(err.message || "There was a problem"));
        // })

        return <Context.Provider value={state}>
            <Component {...props} />
        </Context.Provider>
    }
    return withLocation(SessionComponent);
};