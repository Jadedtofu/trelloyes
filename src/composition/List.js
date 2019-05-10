import React from 'react';

function List(props) {
    return (
        <section className='List'>
            <header>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                <Card />
            </div>

        </section>
    );
}

export default List;