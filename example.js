
// Actions
const EXAMPLE = "example/EXAMPLE"; /* 1 */

const initialState = {
    example: ['헤헤']
}
// Action Creators
export function createExample(sample) {
    console.log("DESC을 생성할거야!");
    return { type: EXAMPLE, sample: sample }; /* 액션 3 */
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "example/EXAMPLE": {
            console.log("EXAMPLE REDUCER");
            const new_example = [...state.example, action.sample];
            console.log(action.sample)
            return { example: new_example };
        }
        default:
            return state;
    }
}