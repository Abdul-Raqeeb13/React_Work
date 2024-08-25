// this is also not a hook

// suppose we have differnt components in a single parent componets we want to share the data parent to child components its easy we use props to send the data frm parent to child , but if we want to send the data to child componsts to other sibling component or parent componst we can not send using props b/c props send to send the data from parent to child . To share the child componst data acoss different componenets or parents component we user 'LIFT THE STATE UP'.

// "Lifting state up" in React means moving state from a child component to its parent component so that multiple child components can share and use that state.

// In simpler terms, if two or more components need to know about or update the same data, you move that data to their closest common parent. This allows the parent to manage the state, and the children can access or change that state through props.



import React, { useState } from 'react'

export default function ListTheStateUp() {
    // this is lift the state up we want to share the data in both children component so we make in parent component and pass the data as props to the children
     const [text , setText] = useState("")
  return (
    <>
    <h1>Lift the state up </h1>
    
    <div style={{textAlign:'center'}}>
        <InputComponent inputValue = {text} setInputValue = {setText}/>
        <DisplayComponent inputValue = {text}/>
    </div>
    </>
  )
}

const InputComponent = ({inputValue , setInputValue}) => {
    // we lift the state up to the parent components that way i comment here , becuse the value of text also want the displayComponent but we cannot send the data between child componets using props thats way we lift the state up.

    // const [text , setText] = useState()
    return(
    <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
    )
}

const DisplayComponent = ({inputValue}) => {
    return(
        <h3>The value of input is : {inputValue}</h3>
    )
}
