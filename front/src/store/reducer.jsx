export const rootReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            console.log(state, "login")
            return { ...state, isLogin: action.payload, user: { expire: action.expire } }
        case "LOGOUT":
            return { ...state, isLogin: false }
        default:
            return state
    }
}
