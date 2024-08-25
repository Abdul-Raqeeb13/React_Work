import React from 'react'
import Apidata from '../components/APIs/Apidata.json'
import '../components/CSS/LoopingStyle.css'

export default function Looping() {
    return (
        <>
            <h1>Looping</h1>
            {/* this css apply in LoopingStyle.css */}
            <ul className='loopingStyleContainer'>
                {
                    // this is looping we cannot use the for, while, and do while loop in react we use map in react instead of for loop
                    Apidata.map((Currvalue, index) => {
                        return (
                            <>
                                <div className='loopingStyle' >

                                    <li style={{ listStyle: "none" }}>User ID : {Currvalue.id}</li>
                                    <li style={{ listStyle: "none" }}>Title : {Currvalue.title}</li>
                                    <li style={{ listStyle: "none" }}>Body  ID : {Currvalue.body}</li>
                                </div>

                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}
