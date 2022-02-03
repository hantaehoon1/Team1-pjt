import { getDocs } from "firebase/firestore";
import { db } from '../../firebase'
import { collection, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
// Actions
const EXAMPLE = "example/EXAMPLE"; /* 1 */

const initialState = {
    example: ['헤헤']
}
// Action Creators
export function createExample(sample) {
    console.log("Example을 생성할거야!");
    return { type: EXAMPLE, sample: sample }; /* 액션 3 */
}
// middlewares

export const addExampleFB = (example) => {
    return async function (dispatch){
        const docRef = await addDoc(collection(db, 'word'), example)
        const _example = await getDoc(docRef)
        const example_data = {id: _example.id, ..._example.data()}
        console.log(example_data)
    }
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