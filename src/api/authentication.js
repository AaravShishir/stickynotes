import axios from "axios";
import { constants } from "../shared/constant";
import helper from "../shared/helper";

let stickynotesApiInstance = axios.create();

async function authenticate() {
  try {
    //  let url = constants.stickynotesapi + constants.getTodo;
    // let todos = await stickynotesApiInstance.get(url);
    let authKey = helper.GetAuthKey(constants.localStorage.authkey);
    return authKey;
  } catch (error) {
    console.log(error);
  }
}

export default {
  authenticate,
};
