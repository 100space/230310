export const rootReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isLogin: action.payload, user: { expire: action.expire } }
        case "LOGOUT":
            return { ...state, isLogin: false }
        default:
            return state
    }
}
