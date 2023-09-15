import React, { useState, useReducer } from 'react'

const UseReducerEx = () => {
// use state
    const [count, setCount] = useState(0)
    const[showText, setShowText] = useState(true)

    const add=()=>{
        setCount(count+1);
        setShowText(!showText)
    }

//  use reducer

const [state, dispatch] =useReducer(reducer,{counter:0 ,showTexts:true});

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREEMENT":
            return {counter:state.counter +1, showTexts:state.showTexts};
        case "toggleShowText":
            return{counter:state.counter, showTexts:!state.showTexts}; 
        default:
            return state;       
    }

}

const dispatcher = ()=>{
    dispatch({type:"INCREEMENT"})
    dispatch({type:"toggleShowText"})
}

  return (
    <div>
        <h2>using use state</h2>
      <h1>{count}</h1>
      <button onClick={add}>Click here</button>
      {showText && <p>This is the text</p>} 

      <br />
      <h2>using use reducer</h2>
<h1>{state.counter}</h1>
<button onClick={dispatcher}>click here</button>


    </div>
  )
}

export default UseReducerEx
