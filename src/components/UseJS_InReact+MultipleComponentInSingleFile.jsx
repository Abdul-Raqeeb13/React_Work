import React from 'react'

// mixed import deault and with by name 
// each file have only one export default and multiple name expost

// access in both component data and body
const name = "ARK"

export default function Data() {

    return (
        <>
            <h1>Data</h1>
            <h1 style={{ textAlign: 'center', backgroundColor: "yellow" }}> Data : Hello From The {name}</h1>
        </>
    )
}


// named export
export const Body = () => {

    let age = 20
    const gender = () => {
        const gender = 'male'
        return gender
    }

    return (
        <>
            <h1>Body</h1>

            <div style={{ textAlign: 'center', backgroundColor: "red" }}>
                Body
                {/* passing variables */}
                <h1>The Gender of {name} is {gender()} and the age is {age}</h1>
                <div>
                    <img src='logo512.png' alt='not found' width='20%' height='20%' />
                </div>
                {/* passing expressing */}
                <p>The Sum is  {1 + 4 + 5}</p>
            </div>
        </>
    )
}



