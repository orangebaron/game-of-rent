import {ADD_PLAYER} from '../constants/action-types';
import {UPDATE_CITY_AND_PLAYER_COUNT} from '../constants/action-types';
import {UPDATE_PLAYER} from '../constants/action-types';


export function addPlayer(payload){
    return { type: ADD_PLAYER, payload }
}

// todo change this to update player job or find a way to dynamically change field
export function updatePlayer(payload){
    return {type: UPDATE_PLAYER, payload }
}

export function updateCityAndCount(payload){
    return { type: UPDATE_CITY_AND_PLAYER_COUNT, payload}
}
