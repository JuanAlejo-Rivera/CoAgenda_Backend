const mongoose = require('mongoose');

const dbConection = async() =>{

    try {
        // console.log('intentando conectar a:', process.env.DB_CNN);
       await mongoose.connect(process.env.DB_CNN);

        console.log('DB online ✌️')

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos 😢');
    }

}

module.exports = {
    dbConection
}   

