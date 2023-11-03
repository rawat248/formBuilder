import postUser from '../Model/user-schema.js';
import postCategory from '../Model/categorySchema.js';


export const addUser = async(request, response) => {
    const user = request.body;
    const newUser = new postUser(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    }
    catch(error){
        response.status(409).json({message:error.message});
    }

}

export const addCategory = async(request, response) => {
    const category = request.body;
    console.log(category);
    const newCategory = new postCategory({questions:category});
    console.log(newCategory);
    try{
        await newCategory.save();
        response.status(201).json(newCategory);
    }
    catch(error){
        response.status(409).json({message:error.message});
    }

}

export const getCategory = async(request,response) => {
    try{
        const users = await postCategory.find({});
        console.log(users);
        response.status(200).json(users);
    }
    catch(error){
        console.log(error);
        response.status(400).json({message:error.message})

    }
}