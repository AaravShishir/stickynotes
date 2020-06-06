import axios from "axios";
import { constants, todos } from "../shared/constant";

let stickynotesApiInstance = axios.create();

async function getToDos() {
  try {
    let url = constants.stickynotesapi + constants.getTodo;
    //let todos = await stickynotesApiInstance.get(url);
    return todos;
  } catch (error) {
    console.log(error);
  }
}

// createNote -- TODO

// deleteNote -- TODO

// editNote -- TODO

export default {
  getToDos,
};
