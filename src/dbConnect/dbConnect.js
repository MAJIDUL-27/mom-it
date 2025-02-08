import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
};
export default dbConnect;
