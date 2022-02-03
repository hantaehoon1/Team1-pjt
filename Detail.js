import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createWord, addWordFB, addDescFB,addExampleFB } from './redux/modules/word';
import { createDesc } from './redux/modules/desc';
import { createExample } from './redux/modules/example';

const Detail = (props) => {
    const word = React.useRef(null)
    const desc = React.useRef(null)
    const example = React.useRef(null)
    
    const history = useHistory()
    const dispatch = useDispatch()
    
    const addBucketList = () => {
        // console.log(word.current.value)
        // console.log(desc.current.value)
        // console.log(example.current.value)
        dispatch(addWordFB({word: word.current.value, desc: desc.current.value, example: example.current.value}))

        history.push("/")
    };
    return (
        <>
            <Container>
                <Subtitle>단어 추가하기</Subtitle>
                
                <div>
                    <h3>단어</h3>
                    <input type="text" ref={word} style={{ width: '50vw', border: '0px', borderBottom: 'solid 1px' }} />
                </div>
                <div>
                    <h3>설명</h3>
                    <input type="text" ref={desc} style={{ width: '50vw', border: '0px', borderBottom: 'solid 1px' }} />
                </div>
                <div>
                    <h3>예시</h3>
                    <input type="text" ref={example} style={{ width: '50vw', border: '0px', borderBottom: 'solid 1px' }} />
                </div>

                <div>
                    <Button type='submit' style={{ backgroundColor: "#44ef21", padding: "20px 50px", borderRadius: "30px" }} onClick={addBucketList} 
                    >추가하기</Button>
                </div>
            </Container>
        </>
    )
}


const Container = styled.div`
background-color: #fff;
width : 50vw;
height : 50vh;
margin : auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Button = styled.div`
    margin : 50px;
    text-align: center;
    border : rgb(121 237 6);
    margin : 50px;

`
const Subtitle = styled.h2`
color: green;
text-align : center;
`;
export default Detail