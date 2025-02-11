import {Link} from "react-router-dom";
import {Row,Col,Image,ListGroup,Button,Card} from "react-bootstrap";
import Rating from "../Components/Rating";
//import  products "../Components/products";

export default function ProductScreen({ match }) {
    const product = products.find((p) => p._id == match.params.id)
    return (
        <div>
          <link to ='/' className="btn btn-light my-3">Go Back</link>
          <Row>
            <Col md={6}>
            <Image src={product.Image} alt={product.name} fluid></Image>
            </Col>


            <Col md={3}>
            <ListGroup varinat ="flash">
                <ListGroup.item>
                    <h3>{product.name}</h3>
                </ListGroup.item>

                <ListGroup.item>
                    <Rating value= {product.Rating} text={`${product.numReviews} reviews`} color={'#f8e825'}></Rating>
                </ListGroup.item>

                <ListGroup.item>
                    Price: ${product.price}
                </ListGroup.item>

                <ListGroup.item>
                    Description: ${product.description}
                </ListGroup.item>
            </ListGroup>
            </Col>

            <Col md={3}>
            <Card>
            <ListGroup varinat ="flash">
                <ListGroup.item>
                    <Row>
                        <Col>Price:</Col>
                        <Col>
                        <strong>${product.price}</strong>
                        </Col> 
                    </Row>
                </ListGroup.item>

                <ListGroup.item>
                    <Row>
                        <Col>Status:</Col>
                        <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'} 
                        {/*  example in the product.jsx when modify the countInStock = 0  we will see Out of Stock and the 
                        countInStock = 5 or any number we will see In Stock ll thia in details product  */}
                        </Col> 
                    </Row>
                </ListGroup.item>

                <ListGroup.item>
                    <Button className="btn-block" disabled={product.countInStock == 0} type="button"> Add to Cart</Button>

                </ListGroup.item>
            </ListGroup>
         </Card> 
            </Col>
          </Row>

        </div>
      
    );
  }