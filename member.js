const express = require('express');
const app = express();
const port = 3000;

app.get("/members", (req,res) => {
   const products = [
     {
       id: "c0a20024",
       name: "内山幸大",
     },
     {
       id: "c0a20025"
       name: "榎本海斗",
     },
     ,
     {
       id: "c0a20064,
       name: "小林千紗",
     },
     {
       id: 4,
       name: "hammer",
     },
   ];

  res.json(products);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
