const mongoose = require('mongoose');

async function connect() {
    // on se connecte à la base de données
    try {
        		//ATTENTION à bien mettre le bon lien
        await mongoose.connect('mongodb+srv://admin:Passw4rd@cluster0.wqtzj.mongodb.net/jeux?retryWrites=true&w=majority', { useNewUrlParser: true });
                               //  mongodb+srv://admin:<password>@cluster0.wqtzj.mongodb.net/<dbname>?retryWrites=true&w=majority
    } catch (err) {
        console.error('impossible de se connecter à la base de donnée', err);
        throw err;
    }

    console.info('connection to the database established...');
}

// on export ici la fonction connect
module.exports = connect;
