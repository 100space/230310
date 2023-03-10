import { useContext, createContext, useReducer } from "react"
import { rootReducer } from "./reducer"
import { useGlobalState } from "../hooks/useGlobalState"

export const Context = createContext()
export const useStore = () => useContext(Context)
export const StoreProvider = ({ children }) => {
    const initialState = {
        isLogin: false,
        user: { expire: "" },
    }
    const [state, dispatch] = useReducer(rootReducer, initialState)
    const [persistedState, setPersistedState] = useGlobalState("state", state)

    const globalState = {
        state: persistedState,
        dispatch: (action) => {
            dispatch(action)
            setPersistedState(rootReducer(persistedState, action))
        },
    }
    return <Context.Provider value={globalState}>{children}</Context.Provider>
}
