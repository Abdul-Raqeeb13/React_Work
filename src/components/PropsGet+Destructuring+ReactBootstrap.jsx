import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function PropsGet(props) {

    // this is destructuring instead of doing prop.data.title, props.data.description in each places we simple use title we destructure the title in porps.data
    const { title, image, description } = props.data

    return (
        <>
        {/* inline css apply in looping.jsx we use external css */}
            <Card style={{ backgroundColor: "grey" ,  width:"25%" ,margin:"30px",padding:"20px" }}>
                <Card.Img variant="top" src={image} style={{ width: '100%', height: "300px" }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> {description} </Card.Text>
                <Button style={{width:'40%' , padding:"10px" , backgroundColor:"yellow" , border:"none", outline:"none", borderRadius:"20px"}}>Go somewhere</Button>
                    
                </Card.Body>
                   
                
            </Card>

        </>
    )
}