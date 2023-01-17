import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProviderSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('provider', ProviderSchema);
