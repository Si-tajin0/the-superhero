import React from 'react';
// auto import bootstrap
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Person.css';

const Person = (props) => {
    // font awesome icon 
    const cart = <i className="fas fa-shopping-cart cart-icon"></i>;
    // destructuring
    const { img, name, salary, age, company, country } = props.person || {};
    return (
        // card Item
        <div className="col-md-4 my-4">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body className="bg-dark card-title">
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush group-name">
                    <ListGroupItem><span>Company:</span> {company}</ListGroupItem>
                    <ListGroupItem><span>Country:</span> {country}</ListGroupItem>
                    <ListGroupItem><span>Age:</span> {age}</ListGroupItem>
                    <ListGroupItem><span>Salary: $</span>{salary}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    {/* button and handler declare */}
                    <button
                        onClick={() => props.handleAddPerson(props.person)}
                        className="cart-btn bg-dark"> {cart} Add To Cart</button>
                    {/* social Icon */}
                    <div className="ml-5 social-icon">
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-instagram-square"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-twitter-square"></i>
                    </div>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Person;