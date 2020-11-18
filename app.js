const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const port = 3000;

const connect = require('./databases/database');

const athleteRouter = require('./routers/athlete.router');
const sportRouter = require('./routers/sport.router');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
// on indique que nos vues se trouverons toujours dans le dossier views 
app.set('views', path.join(__dirname, 'views'));

//Pour donner le chemin des routes
app.use('/', athleteRouter);
app.use('/', sportRouter);

//pour se connecter à MongoDb
connect();


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/', (req, res) => {
  res.render('index', { name: 'jeux' });
});

app.get('/recap', async (res) => {

  // on va devoir récupérer depuis la base de données nos athletes ...
  const athletes = await Athlete.find({}).sort({ nom : 1 });

  res.render('athletes', { athletes });
})