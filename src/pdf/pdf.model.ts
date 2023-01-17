import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PdfSchema = new Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    availablePage: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Pdf', PdfSchema);
