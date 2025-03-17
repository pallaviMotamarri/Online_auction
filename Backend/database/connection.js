import mongoose from "mongoose";

export const connection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "Auction_Platform"
    }).then(()=>{
        console.log("connected to database");
    }).catch(err=>{
        console.log(`Some error occured while connection : ${err}` );
    })
}