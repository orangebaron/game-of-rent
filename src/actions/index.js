import {ADD_PLAYER} from '../constants/action-types';
import {UPDATE_CITY_AND_PLAYER_COUNT} from '../constants/action-types';


export function addPlayer(payload){
    return { type: ADD_PLAYER, payload }
}

export function updateCityAndCount(payload){
    return { type: UPDATE_CITY_AND_PLAYER_COUNT, payload}
}
