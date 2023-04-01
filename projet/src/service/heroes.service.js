//import {getRequest} from '../service/axios.service'
import myaxios from '../service/axios.service'
/*
async function getAlias() {
   let result = {error: 0, status: 200, data: null}
   let response = await myaxios.get('/heroes/getaliases' )
   if (response.error != 0) {
      result.error=1 
      result.data=response.error
   }
   return result
}
*/
export const createHero = (hero) => {
   return myaxios.post("heroes/create", hero);
}
/*
async function updateHeroes() {
   let result = {error: 0, status: 200, data: null}
   let heroesTomodifie = { idHeroes: [ "id_toto", "id_tata"], idTeam: "id_team"}
   let response = await myaxios.put('/heroes/update', heroesToAdd ,{headers : "teams's secret here" })
   if (response.error != 0) {
      result.error=1 
      result.data=response.error
   }
   return result
}


async function getHeroesById(id ) {
   let result = {error: 0, status: 200, data: null}
   let url = "/heroes/getbyid/" + id 
   let response = await getRequest(url, {headers : "teams's secret here" } )
   if (response.error === 0) {
       let heroes = []
       response.data.forEach(c => heroes.push(Heroes.fromAPI(c)))
       result.data =  heroes
   }
   else result = response
   return result
}*/
 