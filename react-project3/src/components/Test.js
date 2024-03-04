import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addAns} from '../redux/AnsSlice'
import {genArr} from '../redux/RandArrSlice'


const Test = () => {
    
    let [showQueBox, setQueBox] = useState(false);
    let disp = useDispatch();
    
    let totalQue = 5;
    let highQueNo = 20;
    
    let start = ()=>{
        disp(genArr({ total : totalQue, hino : highQueNo }));
        setQueBox(true);
    }


  return (
    <div className="container">
        <div className="row">
            {
                showQueBox == false ? 
                 <div className="col-md-6 offset-md-3 mt-4">
                <h3 className='text-center'>Start Your Online MERN Stack Test</h3>
                <div className='d-grid'>
                <button onClick={start} className='btn btn-success mt-5'>Start</button>
                </div>
                </div> : <QueBox />
            }
        </div>
    </div>
  )
}




let QueBox = (props)=>{
    
    let disp = useDispatch();
    let allQue = useSelector(state=>state.QueSlice); // [20...]
    let randArr = useSelector(state=>state.RandArrSlice); // [2, 7, 18, 6, 9]
    let [counter, setCounter] = useState(0);

    let [radioCheck, setRadioCheck] = useState(true);

    // let counter = 0;
    
    let [ans, setAns] = useState("");
    let [que, setQue] = useState({});

    useEffect(()=>{
        let id = randArr[counter];
        setQue(allQue[id]);
        setCounter(x=>{
            let y = x+1;
            return y;
        })
    },[])


    let next = ()=>{
        setRadioCheck(false);
        setCounter(x=>{
            let y = x+1;
            return y;
        })
        let obj = { userans : ans, queno :  que.id};
        disp(addAns(obj));
        let id = randArr[counter];
        setQue(allQue[id]);

    }
    return(
        <div className='col-md-8 offset-md-2'>
            <div className='card border border-dark'>
                <div className='card-header'><h4>Question : 1</h4></div>
                <div className="card-body" style={{minHeight : "300px"}}>
                    <b>Que : {que.que}</b>
                    <br />
                    <br />
                    A <input checked={radioCheck} type='radio' onChange={(event)=>setAns(event.target.value)} name="ans" value="A"/> {que.ansA}
                    <br />
                    <br />
                    B <input checked={radioCheck} type='radio' onChange={(event)=>setAns(event.target.value)} name="ans" value="B"/> {que.ansB}
                    <br />
                    <br />
                    C <input checked={radioCheck} type='radio' onChange={(event)=>setAns(event.target.value)} name="ans" value="C"/> {que.ansC}
                    <br />
                    <br />
                    D <input checked={radioCheck} type='radio' onChange={(event)=>setAns(event.target.value)} name="ans" value="D"/> {que.ansD}
                    <br />
                    <br />
                </div>
                <div className="card-footer">
                    <button onClick={next} className='btn btn-success'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Test