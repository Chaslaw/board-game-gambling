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

  const _handleFinish = (id) => {
    dispatch(appActions.finishGame(id))
  }

  // preparing data for rendering
  const finishedGames = games.filter((item) => {
    if (item.finished === true) {
      return true; // only finished matches
    }
    return false;
  });


  const sortedGames = finishedGames.sort((a, b) => {
    const scoreTotal_a = a.score[0] + a.score[1];
    const scoreTotal_b = b.score[0] + b.score[1];
    const id_a = a.id;
    const id_b = b.id;
    if (scoreTotal_a !== scoreTotal_b) {
      // comparison on score
      return scoreTotal_b - scoreTotal_a;
    } else {
      // if same score, then latest
      // comparison on id
      return id_b - id_a;
    }
  });

  return (

    <div className='main'>

      <h1>Copa America</h1>
      <button className='btn' onClick={handleStart}>START</button>
      <h3>Current Games</h3>

      {games.map((game) => {
        const { sesion } = game;
        if (sesion) {
          return <h2>All games started</h2>
        }
        return null
      })}

      {games.map((game) => {
        const { id, home, away, score, finished, updated } = game;
        if (finished === true) {
          return null;
        } else {
          return (
            <div key={id} className="game-item">
              <div className="teams">
                <div className="team">{home}</div>
                <div className="team">{away}</div>
              </div>
              <div className="score">
                <div className="numbers">{score[0]}</div>
                <div className="hyphen">:</div>
                <div className="numbers">{score[1]}</div>
              </div>
              <div className="btns">
                <button onClick={(e) => { _handleUpdate(id) }}
                  disabled={updated ? true : false}>UPDATE</button>
                <button onClick={(e) => { _handleFinish(id) }}
                  disabled={updated ? false : true}>FINISH</button>
              </div>
            </div>
          );
        }
      })
      }
      <h3>Summary of Finished Games</h3>
      <div className="current-games">
        {
          sortedGames.map((game) => {
            const { id, home, away, score } = game;
            return (<div key={id} className="game-item finished">
              <div className="finished-games">
                <div className="teams">
                <div className="team">{home}</div>
                <div className="team">{away}</div>
                </div>
               </div>
              <div className="final-score">
                <div className="numbers">{score[0]}</div>
                <div className="hyphen">-</div>
                <div className="numbers">{score[1]}</div>
              </div>
              <div className="btns">
              </div>
            </div>)
          })
        }
      </div>
    </div>
  )
    ;
}

export default App;
