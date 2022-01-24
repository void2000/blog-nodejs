const mongoose  = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodeJs_dev',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Connect success');
    } catch (error) {
        console.log('Connect false');
    }
}

module.exports = {connect};
