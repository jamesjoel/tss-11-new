import React, {useState} from 'react'

const Demo6 = () => {

    let [name, setName] = useState("1.jpg")

    let task = (a)=>{
        setName(a);
    }

    let task2 = ()=>{
        setName("1.jpg");
    }

    let task3 = ()=>{
        console.log("****")
    }
    let task4 = ()=>{
        console.log("####")
    }
    let task5 = (event)=>{
        event.preventDefault();
        console.log("@@@@@@");
        //Indore Indore
    }

    let task6 = (event)=>{
        event.preventDefault();
        console.log("%%%%%%%%%%%%");
    }

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <img src={'/assets/images/'+name} style={{height : "400px", width : "400px"}}/>
                <br />
                <br />
                <div onMouseOut={task2}>
                <img src='/assets/images/1.jpg' onMouseOver={()=>task('1.jpg')} style={{height : "80px", width : "80px"}} />
                <img src='/assets/images/2.gif' onMouseOver={()=>task('2.gif')} style={{height : "80px", width : "80px"}} />
                <img src='/assets/images/3.jpg' onMouseOver={()=>task('3.jpg')} style={{height : "80px", width : "80px"}} />
                <img src='/assets/images/4.jpg' onMouseOver={()=>task('4.jpg')} style={{height : "80px", width : "80px"}} />
                <img src='/assets/images/5.jpg' onMouseOver={()=>task('5.jpg')} style={{height : "80px", width : "80px"}} />
                </div>
                <br />
                <br />
                <input type='text' onFocus={task3} onBlur={task4} />
                <br />
                <br />
                <input type='text' onCopy={(event)=>task5(event)} onPaste={(event)=>task6(event)}/>
            </div>
        </div>
    </div>
  )
}

export default Demo6