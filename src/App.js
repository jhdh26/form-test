import { useState } from "react";
import Form from "./components/Form";
import Team from "./components/Team"

function App() {

  const listGender = [
    {
      name:'RPG',
      firstColor:'#A6D157',
      secondColor:'#BDD1E6',
    },
    {
      name:'FPS',
      firstColor:'#E06B69',
      secondColor:'#FDE7E8',
    },
    {
      name:'MOBA',
      firstColor:'#D86EBF',
      secondColor:'#7084E6',
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
