export const ADD_PLAYER = 'ADD_PLAYER';
export const UPDATE_CITY_AND_PLAYER_COUNT = 'UPDATE_CITY_AND_PLAYER_COUNT';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const REMOVE_JOB = 'REMOVE_CARD';
export const ADD_FAMILY = 'ADD_FAMILY'

export function addPlayer(payload){
    return { type: ADD_PLAYER, payload }
}

// todo change this to update player job or find a way to dynamically change field
export function updatePlayer(payload){
    return { type: UPDATE_PLAYER, payload }
}

export function updateCityAndCount(payload){
    return { type: UPDATE_CITY_AND_PLAYER_COUNT, payload }
}

export function removeJob(payload){
    return { type: REMOVE_JOB, payload }
}

export function addFamily(payload){
    return { type: ADD_FAMILY, payload }
}
