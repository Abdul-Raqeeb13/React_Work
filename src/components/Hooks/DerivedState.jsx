// this is not hook but he use the value of the use state we use for it just for sync and handle our data easily

import React, { useState } from 'react'

export default function DerivedState() {

    const [value, setvalue] = useState([
        { name: "Abdul Raqeeb", age: 21, department: "IT" },
        { name: "Abdul Haseeb", age: 23, department: "BDS" },
        { name: "Abdul Muneeb", age: 26, department: "ASF" }
    ])

    // Both usercount , averageAge are the derived state b/c its value depand on the state these values are dreived on state value . Its helpful its autopmatically syncing according to state value
    const userCount = value.length
    const averageAge = Math.floor(value.reduce((value , currValue)=> value + currValue.age, 0) / userCount ) // this count the average age of all usets 0 is the initail value
    return (
        <>
            <h1>Derived State</h1>
            <div style={{ textAlign: "center" }}>
                {
                    value.map((CurrValue, index) => {
                        return (
                            <>
                                <h2 key={index}>{`Name - ${CurrValue.name} - ${CurrValue.age} Years old`}</h2>
                            </>
                        )
                    })
                }
                <h3>Total User : {userCount}</h3>
                <h3>Average Age : {averageAge}</h3>
            </div>
        </>
    )
}
