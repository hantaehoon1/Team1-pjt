import { getDocs } from "firebase/firestore";
import { db } from '../../firebase'
import { collection, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
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

// middlewares
export const addDescFB = (desc) => {
    return async function (dispatch){
        const docRef = await addDoc(collection(db, 'word'), desc)
        const _desc = await getDoc(docRef)
        const desc_data = {id: _desc.id, ..._desc.data()}
        console.log(desc_data)
    }
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
