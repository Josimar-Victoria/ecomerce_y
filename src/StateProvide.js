import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext()

export const StateProvide = ({reducer, initialiState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialiState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)