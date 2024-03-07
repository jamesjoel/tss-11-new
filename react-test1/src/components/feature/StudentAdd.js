import React, {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import StudentSchema  from '../../schema/StudentSchema'
import { addStudent, getOneStudent, updateStudent } from '../../services/StudentService'
import { useNavigate, useParams } from 'react-router-dom'

const StudentAdd = () => {
    let navigate = useNavigate();

    let param = useParams();

    let [stu, setStu] = useState({ name : "", class : "", contact : "", gender : "", address : ""})
    
    useEffect(()=>{
        if(param.id){
            getStu();
        }
    },[])

    let getStu = async()=>{
         let response = await getOneStudent(param.id)
         setStu(response)           
    }

    
    let stuForm = useFormik({
        enableReinitialize : true,
        validationSchema : StudentSchema,
        initialValues : stu,
        onSubmit : async(formdata)=>{
            if(param.id){
                await updateStudent(param.id, formdata);
            }else{

                await addStudent(formdata);
            }
            navigate("/student");
        }
    })
  return (
    <div className='row'>
        <div className='col-md-6 offset-md-3'>
            <form onSubmit={stuForm.handleSubmit}>
            <div className='card'>
                <div className='card-header'>
                    <h4>{param.id ? 'Update' : 'Add New'} Student</h4>
                </div>
                <div className='card-body'>
                    <div className='my-3'>
                        <label>Full Name</label>
                        <input type='text' value={stuForm.values.name} name='name' onChange={stuForm.handleChange} className={'form-control ' + (stuForm.errors.name && stuForm.touched.name ? 'is-invalid' : '')} />
                        {
                            stuForm.errors.name && stuForm.touched.name 
                            ?
                            <small className='text-danger'>{stuForm.errors.name}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-3'>
                        <label>Class</label>
                        <select value={stuForm.values.class} name='class' onChange={stuForm.handleChange} className={'form-control ' + (stuForm.errors.class && stuForm.touched.class ? 'is-invalid' : '')}>
                            <option>Select</option>
                            <option>KG I</option>
                            <option>KG II</option>
                            
                            {
                                Array.from({length : 12}).map((value, index)=><option key={index}>{index+1}</option>)
                            }
                        </select>
                        {
                            stuForm.errors.class && stuForm.touched.class 
                            ?
                            <small className='text-danger'>{stuForm.errors.class}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-3'>
                        <label>Gender</label>
                        <br />
                        Male <input type='radio' value="male" checked={stuForm.values.gender == "male"} onChange={stuForm.handleChange} name="gender" />
                        Female <input type='radio' value="female" checked={stuForm.values.gender == "female"} onChange={stuForm.handleChange} name="gender" />
                        <br />
                        {
                            stuForm.errors.gender && stuForm.touched.gender 
                            ?
                            <small className='text-danger'>{stuForm.errors.gender}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-3'>
                        <label>Contact</label>
                        <input type='text' value={stuForm.values.contact} name='contact' onChange={stuForm.handleChange} className={'form-control ' + (stuForm.errors.contact && stuForm.touched.contact ? 'is-invalid' : '')} />
                        {
                            stuForm.errors.contact && stuForm.touched.contact 
                            ?
                            <small className='text-danger'>{stuForm.errors.contact}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-3'>
                        <label>Address</label>
                        <textarea className={'form-control ' + (stuForm.errors.address && stuForm.touched.address ? 'is-invalid' : '')} value={stuForm.values.address} name='address' onChange={stuForm.handleChange} ></textarea>
                        {
                            stuForm.errors.address && stuForm.touched.address 
                            ?
                            <small className='text-danger'>{stuForm.errors.address}</small>
                            :
                            ''
                        }
                    </div>
                </div>
                <div className='card-footer'>
                    <button type='submit' className='btn btn-success'>{param.id ? 'Update' : 'Add' }</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default StudentAdd


/*
Array.from({length : 10})

[unde, unde, ]

*/