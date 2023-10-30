import axios from "axios";


// const headers = {
//   // "Access-Control-Allow-Headers" : "Content-Type",

// };

export default axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE"

  }
});
