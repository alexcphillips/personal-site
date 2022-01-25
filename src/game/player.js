const axios = require("axios");
const { Hero, blueprint } = require("./hero");

const id = 7;
const user = axios.get(`/user/${id}`).then((res) => {
  console.log(res.data);
});

exports.player = new Hero();
