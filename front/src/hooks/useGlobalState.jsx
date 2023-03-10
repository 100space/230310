import { useState, useEffect } from "react"

export const useGlobalState = (key, initialState) => {
    const [state, setState] = useState(() => {
        const storageState = localStorage.getItem(key)

        return !storageState ? initialState : JSON.parse(storageState)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    const changeStorage = (item) => {
        setState(item)
    }
    return [state, changeStorage]
}
