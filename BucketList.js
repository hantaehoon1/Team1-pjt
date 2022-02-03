import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {loadWordFB} from "./redux/modules/word"
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
const BucketList = (props) => {
    const my_word = useSelector((state) => state.word.word)
    console.log(my_word)
    /* const my_desc = useSelector((state) => state.desc.desc)
    console.log(my_desc)
    const my_example = useSelector((state) => state.example.example)
    console.log(my_example) */
        const history = useHistory()
        const dispatch = useDispatch()
        React.useEffect(()=>{
            dispatch(loadWordFB())
        },[])
    
    return (<ListStyle>
            <h1 style={{margin : '20px 10px'}}>MY dictionary</h1>
        <div> 
            {my_word.map((item, index) => {
                return (<ItemStyle key={index}><h3>단어</h3><h3>{item["word"]}</h3>
                <h3>설명</h3><h3>{item["desc"]}</h3>
                <h3>예시</h3><h3>{item["example"]}</h3>
                
                </ItemStyle>)
            })}
        {/* {{my_word.map((word, index) => {
            return (
                <ItemStyle className="list_item" key={index}>
                    <h3>단어</h3>
                    {word}
                    <h3>설명</h3>
                    
                    <h3>예시</h3>
                </ItemStyle>
                
            );
        })}} */}
        
        </div>
        <button variant="outlined"
                color='secondary'
                onClick={()=>{history.push("/detail")}}>

        </button>
    </ListStyle>
    );

    
};

const ListStyle = styled.div`
    background-color: skyblue;
    max-width: 500px;
    width : 100vw;
    height: 100%;
    margin: auto;
    `;

const ItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    width : 50vw;
    max-width: 450px;
    padding: 16px;
    margin: auto;
    border: 1px solid green;
    border-radius : 20px;
    background-color: #fff;
    `
export default BucketList