//import {getRequest ,postRequest  ,patchRequest} from '../service/axios.service'
import myaxios from '../service/axios.service'

export const createOrganisation = (org) => {
    return myaxios.post("orgs/create", org);
}
