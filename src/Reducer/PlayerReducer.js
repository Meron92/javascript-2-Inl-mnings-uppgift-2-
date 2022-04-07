const initialState = {
    players: [],
    listOfPlayer: []
};

export const PlayerReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_PLAYER":
            // får datan från state players och får ut valda spelaren  
            const player = state.players.find(player => player.id === action.payload.id)
            // lyssnar på om spelaren redan är vald
            const likedList = state.listOfPlayer.find((player) => player.id === action.payload.id ? true : false)

            return {
                // kollar igenom om spelaren är vald annars läggs nya spelaren till
                ...state, listOfPlayer: likedList ? state.listOfPlayer.map((player) => player.id === action.payload.id ? {
                        ...player
                    } : player) :
                    [...state.listOfPlayer, {
                        ...player
                    }]
            };
        case "SELECTED_PLAYER":
            return {
                ...state, players: action.payload.id
            };


        case "REMOVE_PLAYER":
            return {
                ...state, listOfPlayer: state.listOfPlayer.filter((player) => player.id !== action.payload.id)
            };

        default:
            return state;


    }
}