const express = require("express");
const app = express();

app.get("/api/users", (req, res) => {
  res.json([
    {
      id: 1,
      firstName: "sathish"
    },
    {
      id: 2,
      firstName: "saminathan"
    }
  ]);
});

app.get("/api/cars", (req, res) => {
  res.json([
    {
      id: 1,
      brand: "FORD"
    },
    {
      id: 2,
      brand: "NISSAN"
    }
  ]);
});

const port = process.env.PORT || 3001;

app.listen(port);
