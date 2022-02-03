
// Actions
const DESC = "desc/DESC"; /* 1 */

const initialState = {
    desc: ['']
}
// Action Creators
export function createDesc(description) {
    console.log("DESC을 생성할거야!");
    return { type: DESC, description: description }; /* 액션 3 */
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "desc/DESC": {
            console.log("DESC REDUCER");
            const new_desc = [...state.desc, action.description];
            console.log(action.description)
            return { desc: new_desc };
        }

        default:
            return state;
    }

}
