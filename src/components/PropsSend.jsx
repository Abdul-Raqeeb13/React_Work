import React from 'react';
import propsData from '../components/APIs/PropsApiData.json';
import PropsGet from './PropsGet+Destructuring+ReactBootstrap';

export default function PropsSend() {
    return (

        <>
            <h1>Porps</h1>
            <div style={{display:"flex" , flexWrap:"wrap"}}>
                {
                    propsData.map((CurrValue) => {
                        return (
                            // <div style={{ backgroundColor: "blue", textAlign: "center", dsipaly: "flex", color: 'white', padding: '50px', margin: 'auto', marginBottom: "10px", width: "50%", height: '50%' }}>

                                // <li style={{ listStyle: 'none',display:"flex", width:"10%", margin:'10px' }} key={CurrValue.id}>
                                    <PropsGet data={CurrValue} />
                                // </li>
                            // </div>

                        );
                    })
                }
            </div>
        </>
    );
}
