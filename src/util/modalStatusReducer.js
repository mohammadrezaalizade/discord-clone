export function modalStatusReducer(modalContent, action) {
    switch (action.type) {
        case "enteredData": {
            return modalContent = action
        }
        case "clearedData": {
            return modalContent = action
        }
        default: modalContent = null
    }
}