import { model, Schema, Model, Document } from "mongoose";

interface IPost extends Document {
  title: string;
  id: string;
  content: string;
}
// TODO: finish this post schema
const PostSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
});
