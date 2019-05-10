import React from 'react';
import './App.css';
import List from './composition/List.js';

function App(props) {
  // console.log(props.storeData.lists);
  const storeList = props.storeData.lists;
  let allCards = props.storeData.allCards; 

  const listItemHeaders = storeList.map(function(listItem) {
    let myCards = listItem.cardIds.map(cardID => allCards[cardID] );
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
        {listItemHeaders}
      </div>
    </main>
  );
}

export default App;
