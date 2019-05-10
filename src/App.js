import React from 'react';
import './App.css';
import List from './composition/List.js';

function App(props) {
  // console.log(props.storeData.lists);
  const storeList = props.storeData.lists;  // access STORE list
  let allCards = props.storeData.allCards;  // access card info

  const listItems = storeList.map(function(listItem) {
    // iterate through list of objects, then:
    let myCards = listItem.cardIds.map(cardID => allCards[cardID] );  // iterate through each card id in a list
        // return the value of each card id from allCards 
    console.log(myCards);
      return <List key={listItem.id} cards={myCards}>{listItem.header}</List>;
    }
  );

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {listItems}
      </div>
    </main>
  );
}

export default App;
