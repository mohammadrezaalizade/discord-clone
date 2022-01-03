export function serverReducer(state, action) {
    switch (action.type) {
        case "setServerId": {
            return state = action
        }
        default: state = null
    }
}