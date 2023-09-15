import React, { useState } from 'react'

const UseStateEx = () => {

    // using pure javascript
    let num = 0
    const adding=()=>{
        num = num+1
        console.log(num)
    }

// useState function

const [counter,setCounter] = useState(0)


const counterFun=()=>{
    setCounter(counter+1)
   
}

const [inputValue, setInputValue] = useState('sosina')

const changevalue =(e)=>{
    let newValue = e.target.value

    setInputValue(newValue)
}

  return (
    <div>
        <h2>useState Examples</h2>
      <div>
        <p>pure javascript</p>
        {num} <button onClick={adding}>add</button> 
      </div>

      <div>
        <p>useState</p>
        {counter} <button onClick={counterFun}>increement</button>
      </div>
      <div>
        <input type="text" placeholder='write something...' onChange={changevalue} />{inputValue} 
      </div>

    </div>
  )
}

export default UseStateEx
