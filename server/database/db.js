import mongoose from 'mongoose';

const connection = async(username,password)=> {
    const Url = `mongodb+srv://${username}:${password}@cluster0.dcopwof.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(Url,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log('database connected successfully');
    }
    catch(error){
        console.log('Error while connecting with databse',error.message);
    }

}
export default connection;
