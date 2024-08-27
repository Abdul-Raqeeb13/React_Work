import { useEffect, useState } from "react";

function ShowCount() {

    let [count, setcount] = useState(0)

    useEffect(() => {
        alert("Run only one time")
    }, [])


    useEffect(() => {
        alert("Run on every changing")
    },)

    
    useEffect(() => {
        alert("Count was changed")
    }, [count])

    return (
        <>
        <h1>Use Effect hool</h1>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1>Learning UseEffect</h1>
                <h1>Count : {count}</h1>
                <div>

                    <button style={{backgroundColor: "blue" , padding: "10px 30px" , margin: "10px" , outline: "none" , border: "none" , borderRadius: "5px" , color: "white" , fontSize : "20px"}} onClick={() => setcount(++count > 0 ? count : 0) }>+</button>
                    <button style={{backgroundColor: "red" , padding: "10px 30px" , margin: "10px" , outline: "none" , border: "none" , borderRadius: "5px", color: "white" , fontSize : "20px"}} onClick={() => setcount(--count > 0 ? count : 0) }>-</button>
                </div>
            </div>




        </>
    )

}

export default ShowCount;
