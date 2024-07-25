import React from "react";
import Foodlist1 from "./foodlist1";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Foodlist({foodData}){
    return(
    //  <div>
    //     {foodData.map((food)=>(
    //     <Foodlist1 key={food.id} food={food}/>
    //     ))}
    //  </div>
    <Container>
    <Row>
      {foodData.map(food => (
        <Col key={food.id} sm={2} md={3} lg={4} className="mb-6">
          <Foodlist1 food={food} />
        </Col>
      ))}
    </Row>
  </Container>
    );
}
 
export default Foodlist;