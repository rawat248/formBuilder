import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    questions: [
        {
          id: Number,
          ques: [String],
          categories: [String],
          items: [String],
        },
      ],
})
const postCategory = mongoose.model('category',categorySchema);
export default postCategory;




