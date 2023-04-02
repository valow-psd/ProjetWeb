import myaxios from '../service/axios.service'

export const createTeams = (team) => {
    return myaxios.post('teams/create', team );
}

export const getTeams = () => {
    return myaxios.get("teams/get");
}

export const addHeroesTo = (heroes) => {
    return myaxios.patch("teams/addheroes", heroes);
}
export const removeHero = (hero) => {
    return myaxios.patch('teams/removeheroes', hero);
}