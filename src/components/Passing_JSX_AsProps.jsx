import React from 'react'

export function Profile() {
    return (
        <>
            {/*These are name age greeting are props  */}
            <ProfileCard name="Abdul Raqeeb" age={21} greeting={<div>  wow your perform a good work </div>}>

                {/* this is the profile content inner data */}
                Hi Raqeeb you doing a great work
                <br />
                <button>Great</button>

            </ProfileCard>

        </>
    )
}


export default function ProfileCard(props) {

    const { name, age, greeting, children } = props
    return (
        <div>
            <h1>Passing JSX as Props</h1>
            <div style={{ background: "red", padding: '20px', textAlign: "center" }}>
                {
                    <>
                        <h1>Name : {name}</h1>
                        <h1>Age : {age}</h1>
                        <h1>Greeting : {greeting}</h1>
                        {/* children means take the profile function inner data */}
                        <div>{children}</div>
                    </>
                }
            </div>
        </div>



    )
}

