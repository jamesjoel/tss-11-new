import {API_URL} from '../util/API_URL';
import axios from 'axios'

let getAllStudent = async()=>{
    let response = await axios.get(API_URL);
    return response.data;
}
let getOneStudent = async(id)=>{
    let response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}
let addStudent = async(obj)=>{
    let response = await axios.post(API_URL, obj);
    return response.data;
}
let deleteStudent = async(obj)=>{
    let response = await axios.delete(`${API_URL}/${obj.id}`);
    return response.data;
}
let updateStudent = async(id, obj)=>{
    let response = await axios.put(`${API_URL}/${id}`, obj);
    return response.data;
}

export {getAllStudent, getOneStudent, addStudent, updateStudent, deleteStudent};