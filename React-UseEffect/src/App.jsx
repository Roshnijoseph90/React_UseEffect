
import React, { useEffect, useState } from 'react'
import Axios  from './Axios'

const App = () => {
  const [resourceType,setResourceType]= useState();
  const [items,setItems] = useState([])
  useEffect(()=>{
   
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response=>response.json())
    .then(data=>setItems(data))
    .catch(error=>console.log(error))
  },[resourceType])
 return (
    <div>
      <button onClick={()=>setResourceType(`posts`)}>Posts</button>
      <button onClick={()=>setResourceType(`comments`)}>Comments</button>
      <button onClick={()=>setResourceType(`users`)}>Users</button>
      <h2>{resourceType}</h2>
      <ul>
        {items.map((item,index)=>(

        <li>{JSON.stringify(item)}</li>
        
        ))}
      </ul>
      <Axios />
     
    </div>
  )
}

export default App
