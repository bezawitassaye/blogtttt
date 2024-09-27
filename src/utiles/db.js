import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Connection failed:", error.message);
        throw new Error("Connection failed!");
    }
};

export default connect;