import { createContext, useReducer } from "react";
import { serverReducer } from "../util/serverReducer";

export const initState = {
    serverId: null,
}

export const ServerContext = createContext(null);
export const ServerContextDispath = createContext(null);


export const ServerContextProvider = ({ children }) => {
    const [userAuth, dispatch] = useReducer(serverReducer, initState)
    return (
        <ServerContext.Provider value={userAuth}>
            <ServerContextDispath.Provider value={dispatch}>
                {children}
            </ServerContextDispath.Provider>
        </ServerContext.Provider>
    )
}