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
    images: {
      type: Array,
      required: true,
    },
    metadata: Object,
  },
  { timestamps: true },
);

export default mongoose.model('downloadfilm', MyFilmListSchema);
