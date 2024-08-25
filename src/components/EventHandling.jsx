import React from 'react'

export default function EventHandling() {

  const handleClick = () => {
    alert("I run on onClicki")
  }

  // const handleClickAuto = () => {
  //   alert("I run automatically")
  // }

  const handleBtn = (name) => {
    alert(`Welcom ${name}`)
  }

  return (
    <>

      <h1>Event handling</h1>

      {/* using named function  */}
      <button onClick={handleClick}>CLICK ME</button>
      <br />
      {/*uSING NAMED FUNCTION WITH PARENTHESIS  WHEN WE GIVE PARENTHESIS ITS AUTOMATICALLY RUN*/}
      {/* <button onClick={handleClickAuto()}>I RUN AUTO</button> */}
      <br />
      {/* using fat arrow function , tHE BENEFITS OF FAT ARROW FUNCTION OVER NAMED FUNCTION IN FAT ARROW WE CAN PASS THE ARGUMENT WHICH IS NOT ALLOWD IN NAMED ARROW FUNCITON */}
      <button onClick={()=> handleBtn("Abdul Raqeeb")}>CLICK ME</button>

    </>
  )
}
