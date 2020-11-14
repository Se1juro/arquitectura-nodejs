const mongoose = require('mongoose'); 
const config = require('config')
const DB_URI = `mongodb://${config.get('mongodb.host')}:${config.get('mongodb.PORT')}/PruebaArquitectura`;
mongoose
    .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log('DataBase Connect Succesfull'))
    .catch((err) => console.log(err + ' Error en la conexion a la BD'));

module.exports = mongoose;