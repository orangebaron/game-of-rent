import {ADD_PLAYER} from '../constants/action-types';
import {UPDATE_CITY_AND_PLAYER_COUNT} from '../constants/action-types';


const initialState = {
    players: [],
    playerCount: 0,
    city: '',

}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PLAYER:
            return Object.assign({}, state, {
                players: state.players.concat(action.payload)
            });
        case UPDATE_CITY_AND_PLAYER_COUNT:
            return Object.assign({}, state, {
                playerCount: (action.payload.playerCount),
                city: (action.payload.city)
            })
    }
    return state;
};

export default rootReducer;
