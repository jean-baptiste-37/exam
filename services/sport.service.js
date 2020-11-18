const Sport = require('../models/sport.model');

// Une class SportService
class SportService {
    constructor() { }
    async getAll() {
        return sport
            .find({})
            .sort({ name: 1 });
    }

    async create(sportName) {
        console.log('Sport Service Create');
        const created = new Sport({
            name: sportName,
            // createdAt: new Date(),
        });

        await created.save();
        return created;
    }

    async getBySportId(sportId) {
        // return Sport.find({ sportId: sportId }).sort({ createdAt: -1 });
        return Sport.findById(sportId)
    }

    async addInArray(athleteId, sportId) {
        const sport = await this.getBySportId(sportId);
        sport.athletes.push(athleteId);
        await sport.save();
    }
    
}

// on n'oublie pas d'exporter notre Service
module.exports = SportService;