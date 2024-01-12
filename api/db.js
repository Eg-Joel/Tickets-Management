const {Client} = require('pg')


const connectionString = 'postgresql://postgres:joel123@localhost:5432/TicketsManagement';
const client = new Client({ connectionString });
client.connect((err)=>{
    if(err){
     
        console.error('connection error',err);
    }else{
        console.log('Database Connected');
    }
})
module.exports =  client;