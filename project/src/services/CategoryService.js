import axios from 'axios'
import {API_URL} from '../util/API_URL';

let getAllCategory = async()=>{
    let response = await axios.get(`${API_URL}category`);
    return response.data;
}
let getOneCategory = async(id)=>{
    let response = await axios.get(`${API_URL}category/${id}`);
    return response.data;
}


let saveCategory = async(obj)=>{
    let response = await axios.post(`${API_URL}category`, obj);
    return response.data;
}



let updateCategory = async(id, obj)=>{
    let response = await axios.put(`${API_URL}category/${id}`, obj);
    return response.data;
}
let deleteCategory = async(id)=>{
    let response = await axios.delete(`${API_URL}category/${id}`);
    return response.data;
}

export { getAllCategory, getOneCategory, updateCategory, deleteCategory, saveCategory };