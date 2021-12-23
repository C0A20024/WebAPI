const express = require('express');
const app = express();
const port = 3000;

app.get("/members", (req,res) => {
	  const members = [
		    {
			        id: c0a20024,
			        name: "内山幸大",
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
			        name: "wrench",
			      },
		   ];

	 res.json(members);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
