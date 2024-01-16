import React,{useState} from 'react'

const Demo3 = () => {

  let [ color , setcolor]=useState("yellow")
  let [ num, setnum] = useState(0);

  let task1= ()=>{
   setcolor("red")
  }
   let task3=(event)=>{
    setcolor("blue")
    let str = event.target.value
    setnum(str.length)
   }
  


  return (
    <div>
        <div className="contoiner my-5"  >
            <div className="row">
                <div className="col-md-12">
                  <h3>{num} </h3>
                   <input onKeyDown={task1} onKeyUp= {(event)=>task3(event)} type="text" style={{backgroundColor : color}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Demo3