const Athlete = require('../models/athlete.model');

// Une class AthleteService
class AthleteService {
    constructor() { }

    async create(athleteFirstName, athleteName, athleteGender, athleteCountry) {
        console.log('Athlete Service Create');
        console.log(athleteFirstName, athleteName, athleteGender, athleteCountry);
        const created = new Athlete({
            firstname: athleteFirstName,
            name: athleteName,
            gender: athleteGender,
            country: athleteCountry
        });
        //console.log(created);
        await created.save();
        return created;
    }

    async getByathleteId(athleteId) {
        return Athlete.findById(athleteId)
    };
}

// on n'oublie pas d'exporter notre Service
module.exports = AthleteService;