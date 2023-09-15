import { useState } from 'react'

import './App.css'
import UseStateEx from './components/useState/UseStateEx'
import UseReducerEx from './components/UseReducer/UseReducerEx'
import ReducerTutorial from './components/UseReducer/ReducerTutorial'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  {/* <UseStateEx/> */}
  {/* <UseReducerEx/> */}
  <ReducerTutorial/>

  </>
  )
}

export default App
