import React, {useState} from 'react'

const Ludo = () => {
    // 1 --  -50 -44
    // 2 -- -249 -44
    // 3 -- -434 -44
    // 4 -- -50 -215
    // 5 -- -249 -215
    // 6 -- -435 -215

    let [pos, setPos] = useState("-50px -44px");
    let [win, setWin] =useState(false);
    let [imgPath, setImgPath] = useState("url('/assets/img/dice.jpg')")

    let change = ()=>{
        setImgPath("url('/assets/img/dice.jpg')")
        let x = Math.random()*7;
        let y = Math.floor(x);
        if(y==0){
            y++;
        }
        switch(y){
            case 1 : setPos("-50px -44px")
                    break;
            case 2 : setPos("-249px -44px")
                      break;
            case 3 : setPos("-434px -44px")
                    break;
            case 4 : setPos("-50px -215px")
                    break;
            case 5 : setPos("-249px -215px")
                    break;
            case 6 : setPos("-435px -215px")
                    break;
        }
        if(y==6){
            setWin(true);
        }
    }

    let change2 = ()=>{
        setImgPath("url('/assets/img/moving.gif')")
        setTimeout(change, 2000);
    }
  return (
    <div className="container" style={{backgroundColor :"#000", minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-9 offset-md-2" style={{marginTop : "100px"}}>
                <div onClick={change2} className='dice-box' style={{ height : "123px", width : "118px", backgroundColor : "red", margin : "0 auto", backgroundImage : imgPath, backgroundPosition : pos, cursor : "pointer"}}>

                </div>

                <br />
                <br />
                {
                    win  ?<h1 className='text-center text-light'>You Start</h1> : ''
                }
                
                
            </div>
        </div>
    </div>
  )
}

export default Ludo