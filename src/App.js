import { useSelector, useDispatch } from 'react-redux'
import { appActions } from './store/appSlice';
import { getGameStart, getGameUpdate } from './utils/data';

const App = () => {
  
  const dispatch = useDispatch()

  const games = useSelector((state) => state.app.games)

  const handleStart = () => {
    const res = getGameStart();
    if (res) {
      const justStartedGame = res;
      dispatch(appActions.addGame(justStartedGame))
    }
  };

  const _handleUpdate = (id) => {
    const res = getGameUpdate(id);
    if (res) {
      const justUpdatedGame = res;
      dispatch(appActions.updateGame(justUpdatedGame))
    }
  };


  return (

    <div className='main'>

      <h1>Copa America</h1>
      <button className='btn' onClick={handleStart}>START</button>
      <h3>Current Games</h3>

      
      {games.map((game) => {
            const { id, home, away, score } = game;
              
            return (
                <div key={id} className="game-item">
                  <div className="teams">
                    <div className="team">{home}</div>
                    <div className="team">{away}</div>
                  </div>
                  <div className="score">
                    <div className="numbers">{score[0]}</div>
                    <div className="hyphen">-</div>
                    <div className="numbers">{score[1]}</div>
                  </div>
                  <div className="btns">
                    <button onClick={(e) => {_handleUpdate(id)}}>UPDATE</button>&nbsp;&nbsp;
                    <button>FINISH</button>
                  </div>
                </div>
              );
            
          })
        }
    </div>

  )
    ;
}

export default App;
