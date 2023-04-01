//import myaxios from '../service/axios.service'
import {getRequest ,postRequest  ,patchRequest} from '../service/axios.service'

import store from '../store';

export const createOrganisation = (org) => {
    return postRequest("orgs/create", org);
}

export const getOrganisationById = (id) => {
    return getRequest("orgs/getbyid"+ id +"?org-secret="+ store.state.mdpOrga,);
}

export const getOrganisation = () => {
    return getRequest("orgs/get");
}

export const addTeam = (team) => {
    return patchRequest("orgs/addteam?org-secret=" + store.state.mdpOrga, team);
}

export const removeTeam = (team) => {
    return patchRequest("orgs/removeteam?org-secret=" + store.state.mdpOrga, team);
}
