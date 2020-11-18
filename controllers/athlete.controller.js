const AthleteService = require('../services/athlete.service');

class AthleteController {
    constructor() {
        // on créé une nouvelle instance de athleteService que l'on ajoute à notre attribut
        this.athleteService = new AthleteService();
    }

    async create(req, res) {
        console.log('athlete Controller Create');
        const firstname = req.body.firstname;
        const name = req.body.name;
        const gender = req.body.gender;
        const country = req.body.country;
        const sport = req.body.sport;
        //const athleteId = req.params.id;
        console.log(firstname, name, gender, country);
        const created = await this.athleteService.create(firstname, name, gender, country);
        
// trouve le sport correspondant à l'id du sport findById
        // const sportId = await this.sportServices.getBySportId(sport);
// pousse dans le tableau athletes de ton Sport l'id de l'athlete
        // const ajout = await this.sportService.addInArray(athleteId);
  // appeler le .save() du sport
        // await created.save();
        
        res.json(created);
    }

    async getByAthleteId(req, res) {
        const athleteId = req.params.id;

        // on fera la vérification de l'existence du tweet en Exercice

        const athletes = await this.athleteService.getByAthleteId(athleteId);
        res.json(athletes);
    }
}

// on n'oublie pas d'exporter notre Controller
module.exports = AthleteController;
