import React, {useState} from 'react'
import { useFormik } from 'formik'
import StuSchema from '../../schema/StudentSchema'
import axios from 'axios'


const Student = () => {

    let [successMsg, setSuccessMsg] = useState(false);
    let [errMsg, setErrMsg] = useState(false);
    let [spinner, setSpinner] = useState(false);
    let stuFrm = useFormik({
        validationSchema : StuSchema,
        initialValues : {
            name : "",
            age : "",
            class : "",
            gender : ""
        },
        onSubmit : (formdata)=>{

            setSpinner(true);

            axios.post("http://localhost:8080/api/student", formdata)
            .then(response=>{
                setSuccessMsg(true);
                setSpinner(false)
            })
            .catch(()=>{
                setSpinner(false)
                setErrMsg(true);
            })
        }
    })


  return (
    <div className="container my-5">
        <form onSubmit={stuFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4>Add New Student</h4>
                <div className='my-3'>
                    <label>Name {stuFrm.errors.name && stuFrm.touched.name ? <span className='text-danger'>{stuFrm.errors.name}</span> : ''}</label>
                    <input onChange={stuFrm.handleChange} name='name' type='text' className={'form-control '+(stuFrm.errors.name && stuFrm.touched.name ? 'is-invalid' : '')} />
                </div>
                <div className='my-3'>
                    <label>Age {stuFrm.errors.age && stuFrm.touched.age ? <span className='text-danger'>{stuFrm.errors.age}</span> : ''}</label>
                    <input onChange={stuFrm.handleChange} name='age' type='text' className={'form-control '+(stuFrm.errors.age && stuFrm.touched.age ? 'is-invalid' : '')} />
                </div>
                <div className='my-3'>
                    <label>Class {stuFrm.errors.class && stuFrm.touched.class ? <span className='text-danger'>{stuFrm.errors.class}</span> : ''}</label>
                    <input onChange={stuFrm.handleChange} name='class' type='text' className={'form-control '+(stuFrm.errors.class && stuFrm.touched.class ? 'is-invalid' : '')} />
                </div>
                <div className='my-3'>
                    <label>Gender {stuFrm.errors.gender && stuFrm.touched.gender ? <span className='text-danger'>{stuFrm.errors.gender}</span> : ''}</label>
                    <br />
                    <br />
                    Male <input onChange={stuFrm.handleChange} name='gender' type='radio' value="male" />
                    Female <input onChange={stuFrm.handleChange} name='gender' type='radio' value="female" />
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>Add { spinner == true ? <span className='spinner-border spinner-border-sm'></span> : '' }</button>
                {
                    successMsg == true ? <div className='alert alert-success my-3'>
                    Data Saved Successfuly ...
                </div> : ''
                }

                {
                    errMsg == true ? <div className='alert alert-danger my-3'>
                    Somthing went wrong !!!!
                </div> : ''
                }
            </div>
        </div>
        </form>
    </div>
  )
}

export default Student