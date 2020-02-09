import { Schema, Document, model } from 'mongoose';

interface UserUI extends Document {
   name: string;
   email: string;
   password: string;
}

const User: Schema = new Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   }
});

export default model<UserUI>("Users", User);