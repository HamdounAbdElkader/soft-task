import express from 'express'
const list = ['hamdoun', 'abdelkader', 'hamdoun', 'mohamed', 'yasser', 'ahmed', 'fathi'];
const app = express();


//console.log("hamdoun abd elkader")
const fff = (reguest, express) => {
  express.send(list);
}




app.get("/student", fff);
app.listen(3000);