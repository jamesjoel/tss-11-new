import axios from 'axios'
import {API_URL} from '../util/API_URL'

let getAllUser = async() =>{
    let response =await axios.get(`${API_URL}user`);
    return response.data;
}

let changeStatus = async(id, obj)=>{
    let response = await axios.put(`${API_URL}user/${id}`, obj)
    return response.data;

}

export {getAllUser, changeStatus};

