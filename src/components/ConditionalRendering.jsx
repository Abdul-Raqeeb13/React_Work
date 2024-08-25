import React from 'react'

export default function ConditionalRendering() {
    let age = 20
    return (
        <>
            <h1>Conditional Rendering</h1>
            <div style={{backgroundColor:"yellow", padding:'20px', textAlign:'center'}}>             
            <button>{age > 18 ? 'Watch Now ' : 'This is 18+ Content'} </button>
            </div>
        </>
    )
}
