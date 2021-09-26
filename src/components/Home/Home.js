import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    // state declare
    const [persons, setPersons] = useState([]);

    // declare the state for cart 
    const [cart, setCart] = useState([]);

    // button event handelar 
    const handleAddPerson = (person) => {
        const newCart = [...cart, person]
        console.log(newCart);
        setCart(newCart)
    }
    //load data useEffect the convert the json
    useEffect(() => {
        fetch('./ceo.json')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, [])


    return (
        // card colum and row declare 
        <div>
            <div className="row">
                <div className="col-md-9 ps-5">
                    <div className="row">
                        {
                            persons.map(person => <Person
                                key={person.id}
                                person={person}
                                handleAddPerson={handleAddPerson}
                            ></Person>)
                        }
                    </div>
                </div>
                {/* cart colum declare */}
                <div className="col-md-3">
                    <Cart
                        cart={cart}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;