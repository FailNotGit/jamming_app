import { useState } from 'react'
import './App.css'
import Tracklist from './Components/Tracklist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Tracklist />
      </div>
    </>
  )
}

export default App
