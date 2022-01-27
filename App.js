import React from 'react'
import {Route} from 'react-router-dom'
import Main from './Main'
import Detail from './Detail'
function App() {
  const createRanNum = () => {
    return Math.floor(Math.random() * 5) + 1
  }

  const createWeekData = () => {
    const krDay = ['일', '월', '화', '수', '목', '금', '토']
    const today = new Date()
    const day = today.getDay()
    const todayKr = krDay[day]
    const splitDays = krDay.join('').split(todayKr)
    let sortDayArr = [
      todayKr,
      ...splitDays[1],
      ...splitDays[0]
    ] 

    sortDayArr = sortDayArr.map(day => {
      return {
        day,
        score: createRanNum()
      }
    })

    return sortDayArr
  }

  const weekData = createWeekData()
  console.log(weekData)
  return (
    <>
    <div className="App" style={{
        maxWidth: "350px",
        margin : 'auto'
    }}>
      
      <Route path= "/" exact>
        <Main weekData={weekData}/> 
        {/* 리스트 넘겨줄수 있나? */}
      </Route>
      <Route path= "/detail" exact>
      <Detail  weekData={weekData}/>
      </Route>
      
    
    </div>
    </>
  );
}

export default App;