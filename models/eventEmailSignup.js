import mongoose from "mongoose";

const eventEmailSignupSchema = new mongoose.Schema({});

export const EventEmailSignup = mongoose.model(
  "EventEmailSignup",
  eventEmailSignupSchema
);
