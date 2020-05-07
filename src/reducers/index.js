import {ADD_PLAYER} from '../constants/action-types';

const initialState = {
    players: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PLAYER:
            return Object.assign({}, state, {
                players: state.players.concat(action.payload)
            });
    }
    return state;
};

export default rootReducer;
