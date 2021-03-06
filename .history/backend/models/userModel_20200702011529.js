import mongoose from 'mongoose'

const userSceme = new mongoose.Schema({
      name: { type: String, required: true },
      email: {type: String, required: true, unique: true, drop },
      password : {type: String, required: true },
      isAdmin : {type: Boolean, required: true, default: false },
});

const userModel = mongoose.model("User", userSceme );

export default userModel;