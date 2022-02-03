// word.js

import { arrayRemove, doc, getDocs } from "firebase/firestore";
import { db } from '../../firebase'
import { collection, getDoc, addDoc } from 'firebase/firestore'


// Actions
const LOAD = 'word/LOAD'
const CREATE = "word/CREATE"; /* 1 */
/* 2 */
const initialState = {
    word: [ {word: "hi", desc: "hi", example: "hi"}]

}

// Action Creators
export function loadWord(word) {
    return { type: LOAD, word:word }
}

export function createWord(word) {
    console.log("Word을 생성할거야!");
    return { type: CREATE, word: word }; /* 액션 3 */
}
// middlewares
export const loadWordFB = () => {
    return async function (dispatch) {
        const word_data = await getDocs(collection(db, 'word'))
        console.log(word_data)

        let word_list = []
        word_data.forEach((word) => {
            console.log(word.data())
            word_list.push({id: word.id, ...word.data()})
            
        })
        console.log(word_list)
        dispatch(loadWord(word_list))
        // word_data.forEach((word) => {
        //     console.log(word.data())
        //     word_list.push({id:word.id, ...word.data()})
        //     //word_list = [...word_list, {...word.data()} ]
        // }) 
        // console.log(word_list)

        // dispatch(loadWord(word_list))
    }
}

export const addWordFB = (word) => {
    return async function (dispatch){
        const docRef = await addDoc(collection(db, 'word'), word)
        const _word = await getDoc(docRef)
        const word_data = {id: _word.id, ..._word.data()}
        console.log(word_data)

        /* dispatch(createWord(word_data)) */
    }
}
// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "word/LOAD": {
            console.log("WORD REDUCER");
            console.log(action.word)
            return { word: action.word}  
        }
        case "word/CREATE": {
            console.log("WORD REDUCER");
            const new_word = [...state.word, action.word];
            console.log(action.word)
            return { word: new_word };

        } /* 4 새로운 상태값 */


        default:
            return state;
    }
}