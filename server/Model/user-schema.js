import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email:String,
    password:String
})
const postUser = mongoose.model('user',userSchema);
export default postUser;