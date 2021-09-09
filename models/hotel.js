import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const hotelSchema = new Schema(
  {
    title: {
      type: String,
      required: "Title is requred",
    },
    content: {
      type: String,
      required: "content is rewured",
      maxlength: 1000,
    },
    location: {
      type: String,
    },
    price: {
      type: Number,
      required: "Price is requred",
      trim: true,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    from: {
      type: Date,
    },
    to: {
      type: Date,
    },
    bed: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema);
