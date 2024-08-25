import React from 'react'

export default function PassEventHandlers_AsProps() {

    const handleEvent = () => {
        alert("Welocmer User")
    }

    const handleHover = () => {
        alert("Thank you for hovering me");
        
    }
  return (
    // parent component
    <div>
        <h1>Passing Event handler as props</h1>
        {/* passing event as props . passing the props with any you want*/}
        {/* welocme user is the child component we pass event as props */}
        <WelcomeUser onButtonClick = {handleEvent} onhover = {handleHover}/>
      
    </div>
  )
}


const WelcomeUser = (props) => {
    const {onButtonClick , onhover} = props

   return(
    <>
    <button onClick={onButtonClick}>Clicke Me I run the parent function clickevent</button>
    <br />
    <button onMouseEnter={onhover}>Clicke Me I run the parent function hoverevent</button>
    <br />
    </>
   )
} 