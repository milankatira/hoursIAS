import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GenderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model('gender', GenderSchema);
