const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const active = req.query.active;

 function isNumeric(str) {
  return /^\d+$/.test(str);
}

  function isBoolean(str){
    if (str === "true" || str === "false"){
      return true
    }
    else{
      return false
    }
  }

  if(isNumeric(id) == false){
    res.status(400).send("Error parsing user id");
    return
  }
  if(isBoolean(active) == false){
    res.status(400).send("Error parsing status");
    return
  }

  res.send('User and status are correct');
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));