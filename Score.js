const Score = ({ score }) => {
    const scoreArr = Array(5).fill()
  
    return (
      <div className="score">
      {
        scoreArr.map((item, idx) => {
          return (
            <button 
            key={idx} 
            className={ idx > score - 1 ? 'circle' : 'circle on'}>
            </button>
          )
        })
      }
      </div>
    )
  }
  
  export default Score 