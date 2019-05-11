import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {  // test suite for List
    const cards = [
        { title: 'First card', content: 'lorem ipsum' }, 
        { title: 'Second card', content: 'lorem ipsum' },
        { title: 'Fifth card', content: 'lorem ipsum' }
    ];

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List key={1} cards={cards} header="Fourth list">
                        </List>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<List key={1} header="Fourth list" cards={cards} />)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });

}); 

// testing render of List component