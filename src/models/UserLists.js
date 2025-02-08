import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 2,
    max: 100,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
