import { createContext, useReducer } from "react";
import { modalStatusReducer } from "../util/modalStatusReducer";


const initState = {
    modalStatus: false,
    newServer: {
        serverName: null,
        serverImg: null,
    }
}


export const ModalStatusContext = createContext(null);
export const ModalStatusContextDispath = createContext(null);

export const ModalStatusContextProvider = ({ children }) => {
    const [modalStatus, dispatch] = useReducer(modalStatusReducer, initState)
    return (
        <ModalStatusContext.Provider value={modalStatus}>
            <ModalStatusContextDispath.Provider value={dispatch}>
                {children}
            </ModalStatusContextDispath.Provider>
        </ModalStatusContext.Provider>
    )
}