require("dotenv/config");
const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
const port = process.env.PORT;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
});

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(port, () =>
      // eslint-disable-next-line no-console
      console.log(`SOLARIUM BACKEND funcionando na porta: ` + port)
    );
  }

  database() {
    mongoose.connect(db.uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
