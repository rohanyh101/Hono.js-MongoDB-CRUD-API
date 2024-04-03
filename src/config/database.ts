import mongoose from "mongoose";

const MONGO_URI: string = "mongodb+srv://rohanyh:AAgpQjYT4v9deyy4@cluster0.jpdm5ax.mongodb.net/users?retryWrites=true&w=majority";

export const connectToDB = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error: ', err);
        process.exit(1);
    }
};