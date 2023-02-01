

const App = () => {





  return (

    <div className='main'>

      <h1>Copa America</h1>
      <button className='btn'>START</button>
      <h3>Current Games</h3>

      <div className="game">

        <div className="teams">
          <div className="team">Argentina</div>
          <div className="team">-</div>
          <div className="team">Paragway</div>
        </div>

        <div className="result">
          <div className="numbers">3</div>
          <div className="numbers">:</div>
          <div className="numbers">4</div>
        </div>

        <div className="btns">
          <button className="btn">UPDATE</button>
          <button className="btn">FINSH</button>
        </div>
      </div>
    </div>

  )
    ;
}

export default App;
