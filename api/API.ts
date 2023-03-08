import Environment from "./Environment";

export const URL = Environment.prod ? "" : `https://thender.onrender.com`;

export default {
  // AUTHENTICATION
  register: `${URL}/account/signup/`,
  login: `${URL}/account/login/`,
  allPeer: `${URL}/peer/all/`,
  peer: `${URL}/peer/request/`,
  search: `${URL}/search/`,
};
