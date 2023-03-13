export default myaxios

import axios from 'axios'

// create a special axiosAgent agent that works with the apidemo API
const axiosAgent = axios.create({
  baseURL: 'https://apidemo.iut-bm.univ-fcomte.frherocorp'
});

axiosAgent.interceptors.request.use(
    config => {
      return { ...config, headers: { 'app-key': 'ceci est la clef secret'} }
    },
    error => {
      return Promise.reject(error)
    }
)

axiosAgent.interceptors.response.use(
    res => {
      console.log("OK => "+JSON.stringify(res))
      return res
    },
    error => {
      console.log("ERROR => "+JSON.stringify(error))
      return Promise.reject(error)
    }
)

function handleError(serviceName, err) {
  if (err.response) {
    // la requête a été reçue par le serveur mais celui-ci renvoie un status != 2XX, ce qui signifie
    // une erreur. Par exemple, il peut renovyer un status 404 pour dire que la ressource demandée n'existe pas.
    console.log("ERROR while calling SERVICE " + serviceName + ": " + JSON.stringify(err.response));
    return {
      data: {
        error: 1,
        data: err.response.data
      }

    }; // pass the whole object from server because it contains a data field too.
  }
  else if (err.request) {
    // la requete a été envoyée mais aucune réponse reçue.
    console.log("NETWORK ERROR while calling SERVICE "+serviceName+ ": " + JSON.stringify(err.request));
    return {
      data: {
        error: 1,
        data: 'Le serveur est injoignable ou l\'URL demandée n\'existe pas'
      }
    };
  }
  else {
    // tout autre cas
    console.log("UNKNOWN ERROR while calling SERVICE "+serviceName);
    return {
      data: {
        error: 1,
        data: 'Erreur inconnue'
      }
    };
  }
}

/* Fonctions génériques pour envoyer des requêtes http

NB: si tout va bien, un appel à axiosAgent renvoie un objet représentant la réponse à la requête à l'API
Cet objet est souvent nommé response et contient différents champs. Celui qui contient les données que renvoie l'API est nommé data.
Dans le cas de l'API apidemo, elle renvoie toujours des données au format {error: ..., data: ...}
response.data.error indique donc si l'API a rencontré une erreur lors du traitement de la requête (par ex, insertion en BdD impossible)
response.data.data contient les données réelles renvoyée par l'API, c.a.d. pour cette fonction un tableau contenant les personnages.
 */

// NB: name est un "surnom" au service pour les message de debug
async function getRequest(service, name) {
  let response = null
  try {
    response = await axiosAgent.get(service)
  } catch (err) {
    // le catch se fait si le serveur répond avec une erreur type 4XX, 5XX, ou bien si le serveur est off
    // dans ce cas, on appelle la méthode pour traiter ces types d'erreurs
    response = handleError(name, err);
  }
  return response.data;
}

// NB: pour une requête post/patch, les données associées à la requête sont transmises
// par axios sous la forme d'un objet JSON contenant ces données, et axios les transmet
// de façon compactée dans le "corps" de la requête (c.a.d. la partie body). Du côté serveur, il faut "analyser"
// le corps (donc utiliser le module body-parser) afin d'avoir le contenu de l'objet dans req.body.
// Dans la méthode ci-dessous, le paramètre data correspond à l'objet JSON
async function postRequest(service, data, name) {
  let response = null
  try {
    response = await axiosAgent.post(service, data)
  } catch (err) {
    // le catch se fait si le serveur répond avec une erreur type 4XX, 5XX, ou bien si le serveur est off
    // dans ce cas, on appelle la méthode pour traiter ces types d'erreurs
    response = handleError(name, err);
  }
  return response.data;
}

async function patchRequest(service, data, name) {
  let response = null
  try {
    response = await axiosAgent.patch(service, data)
  } catch (err) {
    // le catch se fait si le serveur répond avec une erreur type 4XX, 5XX, ou bien si le serveur est off
    // dans ce cas, on appelle la méthode pour traiter ces types d'erreurs
    response = handleError(name, err);
  }
  return response.data;
}

export {
  getRequest,
  postRequest,
  patchRequest,
}
