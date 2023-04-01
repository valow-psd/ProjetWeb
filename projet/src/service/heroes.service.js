//import {getRequest ,postRequest  ,patchRequest} from '../service/axios.service'
import myaxios from '../service/axios.service'

export const createHero = (hero) => {
   return myaxios.post("heroes/create", hero);
}