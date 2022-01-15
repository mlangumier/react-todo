import * as axios from "axios";

const apiFirebase = axios.create({
  baseURL:
    "https://todolist-75592-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default apiFirebase;
