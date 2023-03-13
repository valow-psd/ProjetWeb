import {getRequest ,postRequest  ,patchRequest} from '../service/axios.service'
import myaxios from '../service/axios.service'


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
 
 async function createTeams() {
    let result = {error: 0, status: 200, data: null}
    let team = { name : "    "}
    let response = await postRequest('/teams/create', team )
    if (response.error != 0) {
       result.error=1 
       result.data=response.error
    }
    return result
 }


 async function addHeroes() {
    let result = {error: 0, status: 200, data: null}
    let heroesToAdd = { idHeroes: [ "id_toto", "id_tata"], idTeam: "id_team"}
    let response = await axios.patch('/teams/addheroes', heroesToAdd )
    if (response.error != 0) {
       result.error=1 
       result.data=response.error
    }
    return result
 }
 
 async function removeHeroes() {
    let result = {error: 0, status: 200, data: null}
    let heroesToRemove = { idHeroes: [ "id_toto", "id_tata"], idTeam: "id_team"}
    let response = await axios.patch('/teams/removeheroes', heroesToRemove )
    if (response.error != 0) {
       result.error=1 
       result.data=response.error
    }
    return result
 }
 