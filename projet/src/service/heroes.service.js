import myaxios from '../service/axios.service'
import store from '../store';

export const createHero = (hero) => {
   return myaxios.post("heroes/create", hero);
}

export const updateHero = (hero) => {
   return myaxios.put("heroes/update?org-secret=" + store.state.mdpOrga, hero);
}

export const getHeroById = (idHero) => {
   return myaxios.get("heroes/getbyid/" + idHero + "?org-secret=" + store.state.mdpOrga);
}

export const getHeroAliases = () => {
   return myaxios.get("heroes/getaliases");
}

