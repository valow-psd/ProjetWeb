import {getRequest ,postRequest  ,patchRequest} from '../service/axios.service'
//import myaxios from '../service/axios.service'

export const createTeams = (team) => {
    return postRequest('teams/create', team );
}

export const getTeams = () => {
    return getRequest("teams/get");
}

export const addHeroesTo = (heroes) => {
    return patchRequest("teams/addheroes", heroes);
}
export const removeHero = (hero) => {
    return patchRequest('teams/removeheroes', hero);
}