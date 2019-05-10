import React from 'react';
import './List.css';
import Card from './Card.js';

function List(props) {
    const cards = props.cards;
    const listCards = cards.map( (card, i) =>
        <Card key={i} title={card.title} content={card.content} />
        );

    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.children}</h2>
            </header>
            <div className='List-cards'>
                {listCards}
            </div>

        </section>
    );
}

export default List;