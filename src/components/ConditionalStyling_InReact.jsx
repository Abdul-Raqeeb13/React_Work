import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CSS/ConditionalStyling_InReact.css'
import ApiData from '../components/APIs/ConditionalStylingApiData.json'

export default function ConditionalStylingInReact() {

  return (
    <>
        <h1>Conditional styling in react</h1>
      <div className='container'>
        {
          ApiData.map((CurrValue) => {
            return (
              <Card className='card'>
                <Card.Img variant="top" src={CurrValue.image} className='image' />
                <Card.Body>
                  <Card.Title>Title : {CurrValue.title}</Card.Title>
                  <Card.Text> Description : {CurrValue.description} </Card.Text>
                  {/* only conditional classnmae */}
                  <Card.Text className={CurrValue.rating.rate > 4 ? "ratingAbove" : "ratingBelow"}>Rating :  {CurrValue.rating.rate} </Card.Text>
                  {/* if we want two classes so give like this . with static classname button and conditional classname */}
                  <Button className={`button ${CurrValue.rating.rate >= 4 ? "ratingAbove" : "ratingBelow"}`}>Go somewhere</Button>

                </Card.Body>


              </Card>
            )
          })
        }
        <div />
      </div>
    </>
  )
}
