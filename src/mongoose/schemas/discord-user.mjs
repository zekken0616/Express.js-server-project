import mongoose from "mongoose";

const discordUserSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  discordID: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
});

export const DiscordUser = mongoose.model("DiscordUser", discordUserSchema);
