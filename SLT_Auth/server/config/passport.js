import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import userModel from "../model/usermodel.js";

// Debug: make sure env variables are loaded
console.log("Google Client ID:", process.env.GOOGLE_CLIENT_ID);
console.log("Google Client Secret:", process.env.GOOGLE_CLIENT_SECRET);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/api/user/google/callback", // Must exactly match Google console
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Extract email safely
        const email = profile.emails?.[0]?.value;
        if (!email) {
          return done(new Error("No email found in Google profile"), null);
        }

        // Check if user already exists
        let user = await userModel.findOne({ email });

        if (!user) {
          // Create new user
          user = await userModel.create({
            name: profile.displayName || "No Name",
            email,
            provider: "google",
            providerId: profile.id,
            avatar: profile.photos?.[0]?.value || null,
          });
        }

        // Return user to passport
        return done(null, user);
      } catch (err) {
        console.error("Google Strategy Error:", err);
        return done(err, null);
      }
    }
  )
);

// Optional: Serialize & Deserialize user for session handling (if using sessions)
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
