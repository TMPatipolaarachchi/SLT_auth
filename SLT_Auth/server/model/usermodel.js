import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: function () {
        return this.provider === "local";
      }
    },

    provider: {
      type: String,
      enum: ["local", "google", "github"],
      default: "local"
    },

    providerId: {
      type: String // Google / GitHub user id
    },

    avatar: {
      type: String // profile image URL (optional)
    }
  },
  { timestamps: true }
);

const userModel =
  mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
