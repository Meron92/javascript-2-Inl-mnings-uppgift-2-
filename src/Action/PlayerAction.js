// Skapar mina actions

export const addPlayers = (players) => {
   return {
        type:"ADD_PLAYER",
        payload: players,
    }
}

export const selectedPlayer = (player) => {
   return {
        type:"SELECTED_PLAYER",
        payload: player,
    }
}

export const removePlayer = (player) => {
    return {
        type: "REMOVE_PLAYER",
        payload: player,
    }
}


