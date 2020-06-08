const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 8080;
connectDB();

app.use(express.json());

if (process.env.NODE_ENV == 'development') {
   app.use(morgan('dev'));
}

// ROUTES
const transactions = require('./routes/transaction');
app.use('/api/v1/transactions', transactions);

if (process.env.NODE_ENV === 'production') {
   app.use(express.static('../client/build'));

   app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
   );
}

app.listen(
   PORT,
   console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
         .bold
   )
);
