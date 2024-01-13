const {Client} = require('pg')
const dotenv = require("dotenv")

dotenv.config()
const connectionString = process.env.PG_URL;
const client = new Client({ connectionString });
client.connect((err)=>{
    if(err){
     
        console.error('connection error',err);
    }else{
        console.log('Database Connected');
    }
})
module.exports =  client;