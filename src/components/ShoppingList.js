import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit, handleFormInput, newItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem, setSearchedItem] = useState("food");
  
  function handleSearchChange(event){
    //event.preventDefault();
    setSearchedItem(event.target.value);
    console.log(searchedItemsList);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    //console.log(searchedItemsList);
  }
  const searchedItemsList = items.filter((item) => {
    if(searchedItem === "food") return true;
    else if (item.name.includes(searchedItem.substring(searchedItem.length-5))) return true;
    return item.name == searchedItem;  
  });
  const itemsToDisplay = searchedItemsList.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit} handleFormInput = {handleFormInput} newItem = {newItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange = {handleSearchChange} search = {searchedItem}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
