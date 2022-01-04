import { createContext, useReducer } from "react";
import { userAuthReducer } from "../util/userAuthReducer";

export const initState = {
    user: null,
}

export const UserauthContext = createContext(null);
export const UserauthContextDispath = createContext(null);


export const UserauthContextProvider = ({ children }) => {
    const [userAuth, dispatch] = useReducer(userAuthReducer, initState)
    return (
        <UserauthContext.Provider value={userAuth}>
            <UserauthContextDispath.Provider value={dispatch}>
                {children}
            </UserauthContextDispath.Provider>
        </UserauthContext.Provider>
    )
}
