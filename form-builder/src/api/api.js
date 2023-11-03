import axios from 'axios';

const Url = 'http://localhost:8000';

export const addUser = async(data) =>{
return await axios.post(`${Url}/`,data)

}

export const addCategory = async(questions) =>{
    return await axios.post(`${Url}/category`,questions)
    
    }

export const getCategory = async() => {
        return await axios.get(`${Url}/category`);
}