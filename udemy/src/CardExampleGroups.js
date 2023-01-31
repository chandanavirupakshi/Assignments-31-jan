import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Rating } from 'semantic-ui-react'
const CardExampleGroups = () => (
 
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          // size='mini'
          src='https://img-b.udemycdn.com/course/480x270/405878_e5a0_3.jpg'
        />
        <Card.Header> The Complete BootCamp React JS</Card.Header>
        <Rating icon='star' defaultRating={3} maxRating={5} />
        <Card.Description>
        <strong> Rs: 999/- </strong>
        </Card.Description>
        <Card.Description> Best Seller 
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          // size='mini'
          src='https://img-b.udemycdn.com/course/480x270/396876_cc92_7.jpg'
        />
        <Card.Header>The CompleteCourse Of CSS and HTML5</Card.Header>
        <Rating icon='star' defaultRating={4} maxRating={5} />
        
        <Card.Description>
        <strong> Rs: 999/- </strong>
        </Card.Description>
      </Card.Content>
     
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          // size='mini'
          src='https://img-b.udemycdn.com/course/480x270/394676_ce3d_5.jpg'
        />
        <Card.Header>Complete Guide About Angular JS 2023 </Card.Header>
        <Rating icon='star' defaultRating={4} maxRating={5} />
        <Card.Description>
         Rs: 999/-
        </Card.Description>
      </Card.Content>
    </Card>
    
  </Card.Group>
)

export default CardExampleGroups
