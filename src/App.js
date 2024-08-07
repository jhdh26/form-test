import { useState } from "react";
import Form from "./components/Form";
import Team from "./components/Team"

function App() {

  const listGender = [
    {
      name:'RPG',
      firstColor:'#f4b4a1',
      secondColor:'#143d59',
    },
    {
      name:'FPS',
      firstColor:'#ffe042',
      secondColor:'#e71989',
    },
    {
      name:'MOBA',
      firstColor:'#0e387a',
      secondColor:'#9fafca',
    }
  ]

  const [games,setGames] = useState([])

  const aNewGameAdd = (game) =>{
    console.log(game)
    setGames([...games, game])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form listGender ={listGender.map(gender => gender.name)}  aRegisteredGame={game => aNewGameAdd(game)}/>
        {listGender.map(gender=> <Team 
        key={gender.name} 
        name={gender.name} 
        firstColor={gender.firstColor} 
        secondColor={gender.secondColor}
        games={games.filter(game => game.gender === gender.name)}
        />)}
      </header>
    </div>
  );
}

export default App;
