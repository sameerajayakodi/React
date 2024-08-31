import { useState } from "react";
import myData from "./myData";
import { Profile } from "./Profile";

const mainBlock = myData.map(({name,city,position})=>{
  return(
     <Profile name={name} city ={city} position={position} key={name+1}/>  
  )

})

function App() {
  const [myVar , setMyVar] = useState({
    name:"Chandika",
    city:"diyathalawa",
    position:"software"
  });


  const [myDataset , setMyDataset] = useState(myData);
  
  const clickHandle = () =>{
    

    setMyDataset();
    
  }
  console.log(myVar);
  return (
    <body className='body'>
      
      {mainBlock}
      <br></br>
      <button className="addBtn" onClick={clickHandle}>click</button>
      
    </body>
  )
}

export default App
