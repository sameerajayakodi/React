import './App.css'
import Main from './Components/Main'
import { people } from './Data/Data'


function App() {
  
  const mainBlock = people?.map(({name,age,email},key)=>{

    return (
      <Main  key={key} name={name} age={age} email={email}  />
    )
  }
  
  
  )
  return (
    <>
     <Main/>
      {mainBlock}
    </>
  )
}

export default App
