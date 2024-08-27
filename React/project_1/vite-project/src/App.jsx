import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <body className='body'>
      
      <button onClick={() => setCount((prevCount) => prevCount+1)}>+</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount((prevCount) => prevCount-1)}>-</button>
    </body>
  )
}

export default App
