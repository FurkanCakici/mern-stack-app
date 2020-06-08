const mongoose = require('mongoose');
const connectDB = async () => {
   try {
      const conn = await mongoose.connect(
         process.env.MONGO_URI ||
            'mongodb+srv://moreyandex:102030@cluster0-w3zfz.gcp.mongodb.net/test?retryWrites=true&w=majority',
         {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
         }
      );
      console.log(
         `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
      );
   } catch (err) {
      console.log(`Error: ${err.message}`.red);
      process.exit(1);
   }
};

module.exports = connectDB;
