const express = require('express');
const AthleteController = require('../controllers/athlete.controller');

// on créé une nouvelle instance de notre controller !
const athleteController = new AthleteController();
// on spécifie le router express
const router = express.Router();

// On définis nos routes 
router.post('/api/athletes', async (req, res) => {
    console.log('athleteRouter post');

    await athleteController.create(req, res);
});

router.get('/api/athletes/:id', async function (req, res) {
    console.log('athleteRouter get');
    athleteController.getByAtleteId(req, res);
});

// ici pas de classe, on export directement l'objet route
module.exports = router;
