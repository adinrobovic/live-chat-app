const express = require("express"); //'express' runs the http server.
const cors = require("cors"); //'cors' allow us to call the server from any other origin.
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body; //Takes in a username.
  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/', //Getting a user in chat engine if they already exist/ if not, it creates one from scratch.
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "20a1a3ad-0afd-44b4-8151-b4c819a9f628" }}
    );
    return res.status(r.status).json(r.data); //The response from the API call will dicate the response and data.
  } catch (e) {
    return res.status(e.response.status).json(e.response.data); 
  }
});

app.listen(3001);