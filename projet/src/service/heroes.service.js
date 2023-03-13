import {getRequest ,postRequest  ,patchRequest} from '../service/axios.service'
import myaxios from '../service/axios.service'
 
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
 