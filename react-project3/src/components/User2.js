import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { sendMsg } from '../redux/MessageSlice';

const User2 = () => {
    let [txt, setTxt] = useState("");
    let dispatch = useDispatch()
    let msg = useSelector(state=>state.MessageSlice);
    let userid = 2;
    let send = ()=>{
        let obj = { userid : userid, message : txt};
        dispatch(sendMsg(obj));
        setTxt("");
    }
  return (
    <div className='container my-3'>
        <div className="row">
            <div className="col-md-8 offset-md-2 border border-info p-3">
                <div className="card">
                    <div className="card-header bg-info">
                        <h4>Chatting : User2</h4>
                    </div>
                    <div  className="card-body" style={{height : "350px", overflow : "auto", display : "flex", alignItems : "flex-end"}}>
                        <ul style={{ listStyle : "none", margin : "0px", padding : "0px", width : "100%"}}>
                        {
                            msg.map(value=><li style={{textAlign : userid == value.userid ? 'right' : 'left'}} key={value.id}>
                                <span style={{backgroundColor : userid == value.userid ? '#f16566' : '#6e9f32', padding : "5px", borderRadius : "5px"}}>
                                {value.message}
                                </span>
                            </li>)                            
                        }
                        </ul>
                    </div>
                    <div className="card-footer bg-dark">
                    <div class="input-group mb-3">
                    <input value={txt} onChange={(event)=>setTxt(event.target.value)} type="text" class="form-control" placeholder="Type your message Here ...." />
                        <button onClick={send} class="btn btn-primary" type="button">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User2