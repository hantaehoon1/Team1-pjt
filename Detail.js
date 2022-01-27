import React from "react"
import { useHistory } from "react-router-dom"
const Detail = (props) => {
    const history = useHistory()
       
    
    return (
        <>
        <div style={{
            display : "flex",
            height : "100vh",
            flexDirection : 'column',
            padding: "16px",
            boxSizing : 'border-box',
            alignItems: 'center',
            justifycontent : 'center',
            width: "100%"
        }}>
        <h1 style={{fontSize:"1.5em", lineHeight:"1.5"}}>
            <span style={{
                backgroundColor : "#fef5d4",
                padding: '5px 10px',
                borderRadius : "30px"
            }}>누구누구</span>평점 남기기</h1>
        <button style={{
            padding : "10px 36px",
            backgroundColor: "#dadafc",
            border : "dadafc",
            borderRadius :'30px',
            margin : "36px 0px"

        }}onClick={()=>{history.push('/')}}>
        평점남기기   
        </button>
        </div>
        </>     
    )
}

export default Detail