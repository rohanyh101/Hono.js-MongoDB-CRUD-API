import mongoose from "mongoose";

const MONGO_URI: string = "Paste Your MongoDB URL";

export const connectToDB = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error: ', err);
        process.exit(1);
    }
};
