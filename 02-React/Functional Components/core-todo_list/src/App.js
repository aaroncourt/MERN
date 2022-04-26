import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import List from './components/List';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;
  column-gap: 25px;
`;

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  border-radius: 10%;
  box-shadow: 1px 1px black;
`;

function App() {

  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  function addNewItem(e) {
    e.preventDefault();
    const itemObject = {
      name: newItem, complete: false
    };
    setItems([...items, itemObject]);
    e.target.reset();
  }

  function deleteItem(delIndex) {
    const filteredItems =  items.filter( (item, index ) => (index !== delIndex));
    setItems(filteredItems);
  }

  function toggleComplete(completeIndex) {
    const completeItems = items.map( (item, index) => {
      if (index === completeIndex) {
        const completeItem = {...item, complete: !item.complete};
        return completeItem;
      };
      return item;
    });
    setItems(completeItems);
  };

  return (
    <div className="App">
      <StyledDiv>
        <form onSubmit={ (e) => addNewItem(e)}>
          <input type='text' onChange={ (e) => setNewItem(e.target.value)} />
          <StyledButton type='submit'>Add</StyledButton>
        </form>
      </StyledDiv>

      {items.map( (item, index) => {
        return (
          <List key={index} item={item} index={index} toggleComplete={toggleComplete} deleteItem={deleteItem}/>
        ); 
      })};
      
    </div>
  );
};


export default App;
