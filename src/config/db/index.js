const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://webserver:xfiHOH98@cluster0.vxhdh.mongodb.net/webserver?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log('connect successfully');

    } catch(error){
        console.log('connect failure');
    }
}

module.exports={connect};