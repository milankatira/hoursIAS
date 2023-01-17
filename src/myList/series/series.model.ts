import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MyListSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    episodeTitle: {
      type: String,
      required: true,
    },
    seriesTitle: {
      type: String,
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

export default mongoose.model('myListseries', MyListSchema);
