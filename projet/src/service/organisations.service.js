import myaxios from '../service/axios.service'
import store from '../store';

export const createOrganisation = (org) => {
    return myaxios.post("orgs/create", org);
}

export const getOrganisationById = (id) => {
    return myaxios.get("orgs/getbyid"+ id +"?org-secret="+ store.state.mdpOrga,);
}

export const getOrganisation = () => {
    return myaxios.get("orgs/get");
}

export const addTeam = (team) => {
    return myaxios.patch("orgs/addteam?org-secret=" + store.state.mdpOrga, team);
}

export const removeTeam = (team) => {
    return myaxios.patch("orgs/removeteam?org-secret=" + store.state.mdpOrga, team);
}
