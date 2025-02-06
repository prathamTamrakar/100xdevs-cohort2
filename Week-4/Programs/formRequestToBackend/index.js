const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// the cors middleware is used to enable CORS for your Express application. This allows your server to handle requests from different origins, which is particularly useful when your frontend and backend are hosted on different domains or ports.

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a + b;
    res.send(sum.toString());
    
  }); 

  app.listen(3000,()=>{
    console.log("Server is running on port 3000")
  })