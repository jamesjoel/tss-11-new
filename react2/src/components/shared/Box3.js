import React, {useContext} from 'react'
import Abc from '../../Context/AbcContext'

const Box3 = () => {

    let x = useContext(Abc);

  return (
    <div style={{height : "100px", width : "100px", backgroundColor : "red"}}>
        <h2>{x[0]}</h2>
    </div>
  )
}

export default Box3