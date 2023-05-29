import React from 'react';
import { Card } from 'react-bootstrap';

const Frase = ({personaje}) => {
    return (
        <section>
            
            <h1>{personaje.character}</h1>
            <hr/>
            <img src={personaje.image} alt="" />
            <Card className='my-5'>
                <Card.Body>
                    <figure>
                        <blockquote className="blockquote">
                            <p>{personaje.quote}</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            <cite title="Source Title">{personaje.character}</cite>
                        </figcaption>
                    </figure>
                </Card.Body>
            </Card>
        </section>
    );
};

export default Frase;