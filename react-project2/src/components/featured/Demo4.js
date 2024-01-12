import React,{useState} from 'react'

const Demo4 = () => {
 
  let [ a , seta] = useState(0);
  let [ b , setb]= useState(true);
  let [city , setcity] = useState (['indore','mumbai','delhi','pune','bhopal','ujjain']);
  let demo =()=>{
   seta (()=>{
    let ans = a +2
    return ans
   })


if (b==true){
  setb(false)
}else{
  setb(true);
}

  };

  return (
     <>
    <h3>{a}</h3>
    <button onClick={demo} className={'btn'+(b==true ? 'btn-info' : 'btn-danger')}>ok</button>
    <br />
    <br />
    <select>
      <option >
        select 
      </option>
      {
        city.map((value)=>{
          return(
            <option >
              {value}
              
            </option>
          )
        })
      }
    </select>
    </>
  )
}

export default Demo4