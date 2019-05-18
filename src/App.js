import React, { Component } from 'react';
import './App.css';
import STORE from './STORE';
import List from './composition/List.js';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
            // v---- .entries(obj) turning object to an array
  return Object.entries(obj).reduce(      // v------- this is all the first parameter
    (newObj, [key, value]) => 
      key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}  // <--- this is the second parameter
  );

  /*
  let tempAllCards = {};
   let keys = Object.keys(this.state.store.allCards);
   tempArray = keys.filter(key => key !== cardID)
   tempArray.forEach(item => {
       tempAllCards[item] = this.state.store.allCards[item]
     })
  */
}

export default class App extends Component {
  // static defaultProps = {
  //   store: {
  //     lists: [],
  //     allCards: {},
  //   }
  // };

  state = {
      store: STORE
  }

handleDeleteCard = (cardId) => {
  // console.log('handle delete card called');
  // console.log(cardId);
    // v-- assigning this object to this other object
    // assuming store has 2 pieces with identical matching structure
  const { 
      lists, 
      allCards 
    } = this.state.store;

  const newLists = lists.map(list => (
    {...list,
    cardIds: list.cardIds.filter(id => id !== cardId)}
  ));

  const newCards = omit(allCards, cardId);

  this.setState({
    store: {
      lists: newLists,
      allCards: newCards
    }
  });
}

handleAddRandoCard = (listId) => {
  console.log('handle add rando card called');
  const newCard = newRandomCard();

  const newLists = this.state.store.lists.map(list => {
    if (list.id === listId) {
      return {
        ...list,
        cardIds: [...list.cardIds, newCard.id]
      };
    }
    return list;
  });

  this.setState({
    store: {
      lists: newLists,
      allCards: {
        ...this.state.store.allCards,
        [newCard.id]: newCard
      }
    }
  });
}

 render() {
  let stateList = this.state.store.lists;
  let stateCards = this.state.store.allCards;
  // console.log(this);   v-- removed function() for => (to pass this)
  let stateListItems = stateList.map((listItem) => {
    // console.log(this);
    return (
      <List
        id={listItem.id}
        key={listItem.id}
        header={listItem.header}
        cards={listItem.cardIds.map(cardID => stateCards[cardID])}
        onDeleteCard={this.handleDeleteCard}
        onAddRandoCard={this.handleAddRandoCard}
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
