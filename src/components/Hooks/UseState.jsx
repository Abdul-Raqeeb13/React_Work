import React, { useState } from 'react'

export default function StateUse() {
    const [value, setvalue] = useState(0)
    return (
        <div>
            <h1>Hooks</h1>
            <h1 style={{textAlign:"center" }}>Use State</h1>
            <div style={{textAlign:"center"}}>
                <h1 style={{textAlign:"center"}}>{value}</h1>
                <button onClick={()=>setvalue(value+1)}>Increment</button>
            </div>

        </div>
    )
}
