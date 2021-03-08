const mongoose = require('mongoose');
const config = require('config');
const chalk = require('chalk');

const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log(chalk.green('MongoDB Connected...'));
  } catch (error) {
    console.error(chalk.bgRed('DB connection failed...'), error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
