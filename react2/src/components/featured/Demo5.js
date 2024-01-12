import React, {useState} from 'react'

const Demo5 = () => {

    let [color, setColor] = useState("black");
    let [num, setNum] = useState(0);
    let task1 = ()=>{
        
        setColor("red");
    }
    let task2 = (event)=>{
        let str = event.target.value;
        setNum(str.length);
    }

    let demo = (a)=>{
        setColor(a);
    }
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                {/* <h3>{num}</h3>
                <input onKeyDown={task1} onKeyUp={(event)=>task2(event)} type='text' style={{backgroundColor : color}}/> */}
                <input type='radio' onChange={()=>demo('red')} name='bgcolor'/>Red
                <input type='radio' onChange={()=>demo('green')} name='bgcolor'/>Green
                <input type='radio' onChange={()=>demo('blue')} name='bgcolor'/>Blue
                <input type='radio' onChange={()=>demo('yellow')} name='bgcolor'/>Yellow

                <div style={{height : "300px", width : "300px", backgroundColor : color}}></div>
            </div>
        </div>
    </div>
  )
}

export default Demo5