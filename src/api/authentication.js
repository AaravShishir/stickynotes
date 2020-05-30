import axios from "axios";
import { constants } from "../shared/constant";

let stickynotesApiInstance = axios.create();

async function authenticate() {
  try {
    //  let url = constants.stickynotesapi + constants.getTodo;
    // let todos = await stickynotesApiInstance.get(url);

    return "dfdfdgsg";
  } catch (error) {
    console.log(error);
  }
}

export default {
  authenticate,
};
