import React from 'react';
import { Card } from 'react-bootstrap';

const Frase = () => {
    return (
        <section>
            <h1>Personajes</h1>
            <hr/>
            <img src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185" alt="" />
            <Card className='my-5'>
                <Card.Body>
                <figure>
                    <blockquote className="blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>
                </Card.Body>
            </Card>
        </section>
    );
};

export default Frase;