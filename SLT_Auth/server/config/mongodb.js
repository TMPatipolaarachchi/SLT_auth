import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const MONGODB_URI = "mongodb+srv://tmpatipolaarachchi_db_user:2455455@sltauth.waciqiu.mongodb.net/?appName=SLTAuth" ;

const connectdb = async () =>{

    await mongoose.connect(MONGODB_URI);
    console.log("db conected")

}

export default connectdb