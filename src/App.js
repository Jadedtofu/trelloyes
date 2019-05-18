import React, { Component } from 'react';
import './App.css';
import List from './composition/List.js';

export default class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    
    allCards: {
      'a': { title: 'First card', content: 'lorem ipsum' },
      'b': { title: 'Second card', content: 'lorem ipsum' },
      'c': { title: 'Third card', content: 'lorem ipsum' },
      'd': { title: 'Fourth card', content: 'lorem ipsum' },
      'e': { title: 'Fifth card', content: 'lorem ipsum' },
      'f': { title: 'Sixth card', content: 'lorem ipsum' },
      'g': { title: 'Seventh card', content: 'lorem ipsum' },
      'h': { title: 'Eighth card', content: 'lorem ipsum' },
      'i': { title: 'Ninth card', content: 'lorem ipsum' },
      'j': { title: 'Tenth card', content: 'lorem ipsum' },
      'k': { title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { title: 'Twelth card', content: 'lorem ipsum' },
      'm': { title: 'Thirteenth card', content: 'lorem ipsum' },
    }
  };
 
handleDeleteCard = () => {
  console.log('handle delete card called');
}

handleAddRandoCard = () => {
  console.log('handle add rando card called');
}

 render() {
  let stateList = this.state.lists;
  let stateCards = this.state.allCards;
  let stateListItems = stateList.map(function(listItem) {
    return (
      <List
        key={listItem.id}
        header={listItem.header}
        cards={listItem.cardIds.map(cardID => stateCards[cardID])}
        onDeleteCard={() => this.handleDeleteCard()}
        onAddRandoCard={() => this.handleAddRandoCard()}
      />
    );
  });

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {stateListItems}
      </div>
    </main>
  );
 }   

  // const storeList = this.props.storeData.lists;  // access STORE list
  // let allCards = this.props.storeData.allCards;  // access card info

  // const listItems = storeList.map(function(listItem) {
  //   // iterate through list of objects, then:
  //   let myCards = listItem.cardIds.map(cardID => allCards[cardID] );  
  //   // iterate through each card id in a list
  //       // return the value of each card id from allCards 
  //   // console.log(myCards);
  //     return (
  //       <List 
  //       key={listItem.id} 
  //       cards={myCards} 
  //       header={listItem.header}
  //       />
  //     );
  //   }
  // );
}

// function App(props) {
//   // console.log(props.storeData.lists);
//   const storeList = props.storeData.lists;  // access STORE list
//   let allCards = props.storeData.allCards;  // access card info

//   const listItems = storeList.map(function(listItem) {
//     // iterate through list of objects, then:
//     let myCards = listItem.cardIds.map(cardID => allCards[cardID] );  // iterate through each card id in a list
//         // return the value of each card id from allCards 
//     console.log(myCards);
//       return <List key={listItem.id} cards={myCards} header={listItem.header}></List>;
//     }
//   );

//   return (
//     <main className='App'>
//       <header className='App-header'>
//         <h1>Trelloyes!</h1>
//       </header>
//       <div className='App-list'>
//         {listItems}
//       </div>
//     </main>
//   );
// }

// export default App;
