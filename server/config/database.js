const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("DB Connection Success"))
    .catch((err) => {
        console.log("DB Connection Failed");
        console.error(err);
        process.exit(1);
    });
};
