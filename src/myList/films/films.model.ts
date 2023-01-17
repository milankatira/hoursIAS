import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MyFilmListSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    mediaId: {
      type: String,
      required: true,
    },
    images: Array,
    metadata: Object,
  },
  { timestamps: true },
);

export default mongoose.model('myListfilm', MyFilmListSchema);
