import {ADD_PLAYER} from '../constants/action-types';


export function addPlayer(payload){
    return { type: ADD_PLAYER, payload }
}
