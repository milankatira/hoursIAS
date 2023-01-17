import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserPreferanceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    genre: {
      type: Schema.Types.ObjectId,
      ref: 'Genre',
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('UserPreferance', UserPreferanceSchema);
