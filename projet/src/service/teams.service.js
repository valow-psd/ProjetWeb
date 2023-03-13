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

async function addTeam() {
    let result = {error: 0, status: 200, data: null}
    let TeamsToAdd = { idTeam: "id_team"}
    let response = await axios.patch('/orgs/addteam', TeamsToAdd , {headers : "teams's secret here" } )
    if (response.error != 0) {
       result.error=1 
       result.data=response.error
    }
    return result
 }
 
 async function removeTeam() {
    let result = {error: 0, status: 200, data: null}
    let TeamsToRemove = { idTeam: "id_team"}
    let response = await axios.patch('/orgs/removeteam', TeamsToRemove , {headers : "teams's secret here" })
    if (response.error != 0) {
       result.error=1 
       result.data=response.error
    }
    return result
 }