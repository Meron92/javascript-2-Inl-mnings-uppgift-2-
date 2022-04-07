import React, { useEffect, useState } from "react";
import { useDispatch, connect } from 'react-redux'
import { addPlayers, selectedPlayer } from "../Action/PlayerAction";
import {Link} from 'react-router-dom'

const PlayerList = ({playersInfo}) => {
    

      const url = "http://localhost:5000/players.json"
      const [topPlayer, setTopPlayer] = useState([]);
      const dispatch = useDispatch();
      
      useEffect(() => {
        fetch(url)
        .then(result => result.json())
        .then(data => (setTopPlayer(data)))
      }, [])

      useEffect(() => {dispatch(selectedPlayer(topPlayer))
    },[topPlayer])

    
    return ( 
<div>
<Link to="/"> <img className="backBtn" src="https://cdn-icons.flaticon.com/png/512/2028/premium/2028286.png?token=exp=1649237315~hmac=3317a3b7acbdff597d191f689c5b6f48" alt=""/> </Link>
<div className="headerPlayerList"><h1>Alla Spelare</h1></div>
       {topPlayer.map((player)=> (
       <div className="wrapperInfo" key={player.id}>
       <h4>{player.name}</h4>
       <h4># {player.number}</h4>
       <img src={player.img}></img>
       <Link to='/PlayerInfo'> <button className="PlayerInfoBtn" onClick={()=>playersInfo(player)}>Lägg i listan</button></Link>
       </div>
     ))}
</div>
     );
}
// dispatchar min action så att spelaren läggs till via onclicken på button 
const info = dispatch => {
  return {
    playersInfo: player => dispatch(addPlayers(player))
  }
}

export default connect(null,info) (PlayerList)
