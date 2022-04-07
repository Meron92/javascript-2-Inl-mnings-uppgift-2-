import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { removePlayer } from "../Action/PlayerAction";
import store from "../store";
import {Link} from 'react-router-dom'

const PlayerInfo = ({ chosenPlayers }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => setPlayers(chosenPlayers), []);
 
  store.subscribe(
    () => setPlayers(store.getState().allPlayers.listOfPlayer),
    store.getState().allPlayers.listOfPlayer);
    
  const dispatch = useDispatch();

  return (
    <div className="backgroundImgPlayerInfo">
     <Link to="/PlayerList"> <img className="backBtn" src="https://cdn-icons.flaticon.com/png/512/2028/premium/2028286.png?token=exp=1649237315~hmac=3317a3b7acbdff597d191f689c5b6f48" alt=""/> </Link>
     <div className="chosenPlayer"><h1>Valda spelare</h1></div>
      {players.map((chosenPlayer) => (
        <section className="chosenWrapper" key={chosenPlayer.id}>
          <h1>{chosenPlayer.name}</h1>
          <h3># {chosenPlayer.number}</h3>
          <p className="whiteSeason">Säsong 21/22</p>
          <img src={chosenPlayer.img} alt="" />
          <h4>Antal spelade matcher: {chosenPlayer.games}</h4>
          <h4>Antal mål: {chosenPlayer.goals}</h4>
          <h4>Antal gula kort: {chosenPlayer.yeallowCard}</h4>
          <h4>Antal röda kort: {chosenPlayer.redCard}</h4>
            <img className="deletePlayer" src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="" onClick={() => dispatch(removePlayer(chosenPlayer))} />
        </section>
      ))}
    </div>
  );
}
// Gör min uppdaterade lista av spelare tillgänglig med hjälp av connect
const mapState = (state) => {
  return {
    chosenPlayers: state.allPlayers.listOfPlayer,
  };
};

export default connect(mapState)(PlayerInfo);
