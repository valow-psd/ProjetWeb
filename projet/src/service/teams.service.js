//import {getRequest} from '../service/axios.service'
import myaxios from '../service/axios.service'

/*
async function getAllTeams() {
    let result = {error: 0, status: 200, data: null}
    let response = await getRequest('/teams/get', 'GETALLHEROS')
    if (response.error === 0) {
        let teams = []
        response.data.forEach(c => teams.push(Team.fromAPI(c)))
        result.data = teams
    }
    else result = response
    return result
 }
 */
export const createTeams = (team) => {
    return myaxios.post('teams/create', team );
 }

/*
const addHeroes = (heroes) => {
    return myaxios.patch("teams/addheroes", heroes);
 }
 
 async function removeHeroes() {
    let result = {error: 0, status: 200, data: null}
    let heroesToRemove = { idHeroes: [ "id_toto", "id_tata"], idTeam: "id_team"}
    let response = await myaxios.patch('/teams/removeheroes', heroesToRemove )
    if (response.error != 0) {
       result.error=1 
       result.data=response.error
    }
    return result
 }
 */