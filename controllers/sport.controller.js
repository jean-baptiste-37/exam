const SportService = require('../services/sport.service');

class SportController {
    constructor() {
        // on créé une nouvelle instance de SportService que l'on ajoute à notre attribut
        this.sportService = new SportService();
    }

    async create(req, res) {
        console.log('Sport Controller Create');
        const name = req.body.name;
        // const sportId = req.params.id;

        // on fera la vérification de l'existence du sport

        const created = await this.sportService.create(name);
        res.json(created);
    }

    async getBySportId(req, res) {
        const sportId = req.params.id;
        
        const sport = await this.sportService.getBySportId(sportId);
        res.json(sport);
    }
}

// on n'oublie pas d'exporter notre Controller
module.exports = SportController;
