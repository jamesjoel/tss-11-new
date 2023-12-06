import React, {useState} from 'react'

const About = () => {

  let [a, setA] = useState(0);
  let [b, setB] = useState(true);
  let [city, setCity] = useState(["indore", "mumbai", "pune", "delhi", "bhopal", "ujjain"]);

  let [data, setData] = useState(
    [
      {
        id : 1,
        name : "Rohit",
        age : 25
      },
      {
        id : 2,
        name : "Amar",
        age : 22
      },
      {
        id : 3,
        name : "Vijay",
        age : 27
      },
      {
        id : 4,
        name : "Nidhi",
        age : 20
      },
      {
        id : 5,
        name : "Jaya",
        age : 20
      },
      {
        id : 6,
        name : "Gaurav",
        age : 21
      }
    ]
  );

  let hello = ()=>{
    // setA(100);
    setA(()=>{
      let ans = a+2;
      return ans;
    })


    if(b==true){
      setB(false)
    }else{
      setB(true);
    }

  }

  return (
    <div className='container my-4' style={{minHeight : "600px"}}>
        <h2>About Page</h2>
        <h3>{a}</h3>
        <button onClick={hello} className={'btn '+ (b==true ? 'btn-info' : 'btn-danger')}>OK</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque alias, reprehenderit explicabo error quo adipisci voluptatum eligendi. Tempore mollitia iure minus assumenda doloribus, fugit ipsam tenetur explicabo maiores odit!</p>
        <br />
        <br />
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((value, index)=>{ 
                return(
                  <tr>
                    <td>{index+1}</td>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>
        <br />
        <br />
        <select>
          <option>Select</option>
          {
            city.map(value=><option>{value}</option>)
          }
        </select>
    </div>
  )
}

export default About