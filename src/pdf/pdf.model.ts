import { string } from '@hapi/joi';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PdfSchema = new Schema(
  {
    fileName: {
      type: String,
      // required: true,
    },
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      // required: true,
    },
    bookMark: [{
      name: {
        type: String,
      },
      availablePageFrom: {
        type: String,
        // required: true,
      },
      availablePageTo: {
        type: String,
        // required: true,
      },
    }],

  },
  { timestamps: true },
);

export default mongoose.model('Pdf', PdfSchema);
