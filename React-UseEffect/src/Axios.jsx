import React, { useEffect, useState } from 'react'
import axios from 'axios'; 
const Axios = () => {
    const[items,setItems] = useState([])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response=>setItems(response.data))
    
        .catch(error=>console.log(error))

    },[])
  return (
    <div>
      
    
      <h2>Users</h2>
      <ul>
        {items.map((item,index)=>(

        <li>{JSON.stringify(item)}</li>

        ))}
      </ul>
     
    </div>
  )
}

export default Axios
