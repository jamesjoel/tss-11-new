import React, {useState} from 'react'

const Demo8 = () => {

    let [count, setCount] = useState(17);

    let [check, setCheck] = useState(false);

    let [x, setX] = useState("fa fa-thumbs-o-up");

    let like = ()=>{
        if(x == "fa fa-thumbs-o-up"){

            setX("fa fa-thumbs-up")
            setCount(count+1);
        }
        else{

            setX("fa fa-thumbs-o-up")
            setCount(count-1);
        }
    }

    let demo = (event)=>{
        let str = event.target.value;
        if(str.length > 0)
        {
            setCheck(true);
        }
        else{
            setCheck(false);
        }
    }

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                <h3 style={{color : "blue"}}>
                    <i onClick={like} style={{cursor : "pointer"}} class={x} aria-hidden="true"></i>
                    {count}
                    {/* <i class="fa fa-thumbs-up" aria-hidden="true"></i> */}
                </h3>
                <br />
                <br />
                <div className="input-group mb-3">
                    <input onChange={(event)=>demo(event)} type="text" className="form-control"  />
                    <span className="input-group-text">
                        {
                            check == true ? <button type="button" class="btn-close" aria-label="Close"></button> : ''
                        }
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Demo8