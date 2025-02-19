import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [newItem, setNewItem] = useState({
    id : Number(uuid()),
    name: "name",
    category: "Produce"
  })
  function handleFormInput(event){
    const name = event.target.name;
    const value = event.target.value;
    setNewItem({...newItem, [name]: value,})
  }
  function handleFormSubmit(event){
    event.preventDefault();
    setItems ([...items, newItem]);
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit = {handleFormSubmit} handleFormInput = {handleFormInput} newItem = {newItem}/>
    </div>
  );
}

export default App;
