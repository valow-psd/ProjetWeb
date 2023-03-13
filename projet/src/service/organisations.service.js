import {getRequest ,postRequest  ,patchRequest} from '../service/axios.service'
import myaxios from '../service/axios.service'

async function getAllOrgs() {
    let result = {error: 0, status: 200, data: null}
    let response = await getRequest('/orgs/create', 'GETALLHEROS')
    if (response.error === 0) {
        let orgs = []
        response.data.forEach(c => orgs.push(Orgs.fromAPI(c)))
        result.data =  orgs
    }
    else result = response
    return result
 }
 
 
 async function createOrgs() {
    let result = {error: 0, status: 200, data: null}
    let orgs = { name : "    " , secret : "       "}
    let response = await postRequest('/orgs/create', team )
    if (response.error != 0) {
       result.error=1 
       result.data=response.error
    }
    return result
 }
 
 
 async function getOrgsById(id ) {
    let result = {error: 0, status: 200, data: null}
    let url = "/orgs/getbyid/" + id 
    let response = await getRequest(url, {headers : "teams's secret here" } )
    if (response.error === 0) {
        let orgs = []
        response.data.forEach(c => orgs.push(Orgs.fromAPI(c)))
        result.data =  orgs
    }
    else result = response
    return result
 }