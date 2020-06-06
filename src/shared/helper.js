import Moment from "moment";
import ls from "local-storage";
import { constants } from "./constant";

function FormatDate(value) {
  return Moment(value).fromNow();
}

function GetAuthKey() {
  return ls.get(constants.localStorage.authkey);
}

function RemoveAuthKey() {
  return ls.remove(constants.localStorage.authkey);
}

function IsUserAuthenticated() {
  debugger;
  let authKey = ls.get(constants.localStorage.authkey);
  return authKey ? true : false;
}

export default {
  FormatDate,
  GetAuthKey,
  RemoveAuthKey,
  IsUserAuthenticated,
};
