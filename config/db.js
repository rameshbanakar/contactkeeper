const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connetDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log("mongodb connected....");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
  //   mongoose
  //      .connect(db, {
  //         useNewUrlParser: true,
  //         //useCreateIndex: true,
  //     //   useFindAndModify: false,
  //      }
  //     )
  //     .then(() => console.log("mongoDB conneted"))
  //     .catch((err) => {
  //       console.log(err.message);
  //       process.exit(1);
  //     });
};
module.exports = connetDB;
