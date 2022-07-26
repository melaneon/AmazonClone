import React , {createContext, useContext, useReducer} from "react";

//Prepare the datalayout
export const StateContext = createContext();

//Wrap our app provide the datalayer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull info from the datalayer
export const useStateValue = () => useContext(StateContext);

