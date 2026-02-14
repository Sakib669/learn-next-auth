import { model, models, Schema } from "mongoose";

interface IPost {
  name: string;
  description: string;
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const postSchema = new Schema<IPost>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const POSTS = models?.POST || model<IPost>("POST", postSchema);

export default POSTS;
