import React, {createContext, useState, useEffect} from "react";
import getState from "./store.js";
import withLocation from "../components/withLocation";

export const Context = createContext(null);

export const Store = Component => {
    const SessionComponent = (props) => {
        const [state, _setState] = useState(getState({
            getStore: () => JSON.parse(localStorage.getItem("bc-website-store")) || state.store,
            getActions: () => state.actions,
            setStore: updatedStore => {
                const oldStore = state.actions.getStore();
                const newStore = {...oldStore, ...updatedStore };
                localStorage.setItem("bc-website-store", JSON.stringify(newStore));
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
        return <Context.Provider value={state}>
            <Component {...props} />
        </Context.Provider>
    }
    return withLocation(SessionComponent);
};