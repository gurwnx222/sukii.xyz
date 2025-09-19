import mongoose from "mongoose";

const eventEmailSignupSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

export const EventEmailSignup = mongoose.model(
  "EventEmailSignup",
  eventEmailSignupSchema
);

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    emailSignups: {
      type: Number,
      default: 0,
    },
    eventMedium: {
      type: String, // Changed from Boolean to String
      enum: ["virtual", "physical"],
      default: "virtual",
    },
    attendees: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Event = mongoose.model("Event", eventSchema);
