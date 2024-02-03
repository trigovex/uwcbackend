const mongoose = require('mongoose');
 

let mongoUrl = "mongodb+srv://trigovextechnologies:HO2ZY34CuHMVlUm0@cluster0.og9juxc.mongodb.net/?retryWrites=true&w=majority"

function connectToDatabase() {
  mongoose.connect(mongoUrl, {

  });

  mongoose.connection.on('connected', () => {
    console.log('Database connected...');
  });

  mongoose.connection.on('error', (err) => {
    console.error('An error occurred:', err);
  });
}

module.exports = connectToDatabase;