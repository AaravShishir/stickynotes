import axios from "axios";
import { constants } from "../shared/constant";
import ls from "local-storage";

let userApiInstance = axios.create();

async function loginUser(userId, userPwd) {
  try {
    //  let url = constants.stickynotesapi + constants.getTodo;
    // let todos = await userApiInstance.get(url);
    if (userId == "test" && userPwd == "1234") {
      ls.set(constants.localStorage.authkey, "qwerty");
      return true;
    } else {
      ls.remove("SN_AUTH");
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

// userDetails -- TODO

// logout -- TODO

// signup -- TODO

// forgotPassword -- TODO

export default {
  loginUser,
};
