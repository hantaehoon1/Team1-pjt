import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound";
import {db} from './firebase'
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore'
import { async } from "@firebase/util";




function App() {
   

    return (
        <All>
            <div>
                <Title>중국어 단어장</Title>
                <Line />
                <Switch>
                    <Route path="/" exact>
                        <BucketList />
                    </Route>
                    <Route path="/detail">
                        <Detail />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </All>
    );
}


const All = styled.div`
background-color : #fff;
height : 100vh;
width : 100vw;
`

const Title = styled.h1`
color: black;
text-align: center;
`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px solid #ddd;
`;

export default App;