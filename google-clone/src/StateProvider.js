import React,{createContext, useContext, useReducer} from "react";


//preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({reducer, inititalState, children}) => (
 
    //initialState is the state of the data layer when the app loads and reducer listens to the changes. 

    <StateContext.Provider value={useReducer(reducer,inititalState)}>
        {children}
    </StateContext.Provider>
);


//hook which allows us to pull info from the data layer
export const useStateValue = () => useContext(StateContext);