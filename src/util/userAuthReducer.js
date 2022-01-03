export function userAuthReducer(state, action) {
    switch (action.type) {
        case "login": {
            return state.user = action
        }
        case "logout": {
            return state.user = null
        }
       
        default: state = null
    }
}