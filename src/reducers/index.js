import {ADD_PLAYER} from '../actions/index';
import {UPDATE_CITY_AND_PLAYER_COUNT} from '../actions/index';
import {UPDATE_PLAYER} from '../actions/index';
import {REMOVE_JOB} from '../actions/index';

const initialState = {
    players: [],
    playerCount: 0,
    city: '',
    jobs: [
        {title: 'Social Worker', income: 2835},
        {title: 'Lawyer', income: 10810},
        {title: 'Hotel Concierge', income: 2195},
    ]

}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PLAYER:
            return Object.assign({}, state, {
                players: state.players.concat(action.payload)
            });
            break;
        case UPDATE_CITY_AND_PLAYER_COUNT:
            return Object.assign({}, state, {
                playerCount: (action.payload.playerCount),
                city: (action.payload.city)
            });
            break;
        case UPDATE_PLAYER:
            return Object.assign({}, state, {
                players: state.players.map((player, index) => index === action.payload.playerId ? {...player, job: action.payload.job} : player)
            });
            break;
         case REMOVE_JOB:
            return Object.assign({}, state, {
                jobs: state.jobs.filter(job => job.title != action.payload.title)
            });
            break;
    }
    return state;
};

export default rootReducer;
