import React, {useState} from 'react'


const Demo1 = () => {

    let hello1 = ()=>{
        console.log("*********");
    }
    let hello2 = ()=>{
        console.log("############");
    }

  return (
    <>
        <div className='container my-4'>
            <div className="row">
                <div className="col-md-12">
                    
                    <button  onClick={hello1} onDoubleClick={hello2}>OK</button>
                </div>
            </div>
        </div>
    </>
  )
  
}

export default Demo1