import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({});

export const Event = mongoose.model("Event", eventSchema);
