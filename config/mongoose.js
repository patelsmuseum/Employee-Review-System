
const mongoose = require('mongoose');


//checking error if any
main().catch(err => console.log(err));

//connecting mangoose
async function main() {
  await mongoose.connect('mongodb+srv://pankajpurshotam:patel123@cluster0.ypd4rpe.mongodb.net/?retryWrites=true&w=majority');

}

//connecting db to mangoose connection 
const db = mongoose.connection;


//checking successfully connected 
db.once('open' , function(){
    console.log('susscessfully connected to the database of ERS');
})

module.exports = db;