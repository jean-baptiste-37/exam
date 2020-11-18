const express = require('express');
const SportController = require('../controllers/sport.controller');

// on créé une nouvelle instance de notre controller !
const sportController = new SportController();
// on spécifie le router express
const router = express.Router();

// On définis nos routes 
router.post('/api/sports', async (req, res) => {
    console.log('Sport Router Post');
    
    await sportController.create(req, res);
});

router.get('/api/sports/:id', async function (req, res) {
    sportController.getBySportId(req, res);
});

// ici pas de classe, on export directement l'objet route
module.exports = router;