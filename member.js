const express = require('express');
const app = express();
const port = 3000;

app.get("/members", (req,res) => {
   const products = [
     {
       id: 1,
       name: "hammer",
     },
     {
       id: 2,
       name: "screwdriver",
     },
     ,
     {
       id: 3,
       name: "wrench",
     },
     {
       id: 4,
       name: "hammer",
     },
   ];

  res.json(products);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
