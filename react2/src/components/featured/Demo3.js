import React, {useState} from 'react'

const Demo3 = () => {

    let [t, setT] = useState(0);
    let [l, setL] = useState(0);
    let [color, setColor] = useState("451245")

    let task = ()=>{
        let x = Math.random()*500;
        let y = Math.floor(x); // 1-500
        
        let a = Math.random()*800;
        let b = Math.floor(a); // 1-800

        let temp = "";
        for(let i =1; i <= 6; i++)
        {
            let num = Math.floor(Math.random()*9);
            temp += num;
        }
        

        setT(y);
        setL(b);
        setColor(temp);
        
    }

  return (
    <div onMouseMove={task} style={{height : "150px", width : "150px", backgroundColor : "#"+color, borderRadius : "100px", marginTop : t+"px", marginLeft : l+"px"}}></div>
  )
}

export default Demo3