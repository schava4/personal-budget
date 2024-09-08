const express = require('express');
const cors = require('cors')
const app = express();
const port =3000;
const data=require('./data.json');
app.use(cors());
app.get('/hello',(req,res) => {
    res.send('Hello World!');

});
app.get('/budget',(req,res)=>{
    res.json(data);
    
})
app.listen(port, () => {
  console.log("Api Served at http://localhost:"+port);
  
});