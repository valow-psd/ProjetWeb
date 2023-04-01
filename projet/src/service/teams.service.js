//import {getRequest ,postRequest  ,patchRequest} from '../service/axios.service'
import myaxios from '../service/axios.service'

export const createTeams = (team) => {
    return myaxios.post('teams/create', team );
}