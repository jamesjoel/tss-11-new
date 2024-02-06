import axios from 'axios'
import {API_URL} from '../util/API_URL';

let getAllSubCategory = async()=>{
    let response = await axios.get(`${API_URL}subcategory`);
    return response.data;
}
let getOneSubCategory = async(id)=>{
    let response = await axios.get(`${API_URL}subcategory/${id}`);
    return response.data;
}


let saveSubCategory = async(obj)=>{
    let response = await axios.post(`${API_URL}subcategory`, obj);
    return response.data;
}



let updateSubCategory = async(id, obj)=>{
    let response = await axios.put(`${API_URL}subcategory/${id}`, obj);
    return response.data;
}
let deleteSubCategory = async(id)=>{
    let response = await axios.delete(`${API_URL}subcategory/${id}`);
    return response.data;
}

export { getAllSubCategory, getOneSubCategory, updateSubCategory, deleteSubCategory, saveSubCategory };