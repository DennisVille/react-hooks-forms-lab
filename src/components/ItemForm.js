import React from "react";


function ItemForm(props) {
  const newItem1 = props.newItem;
  return (
    <form className="NewItem" onSubmit={props.onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange = {props.handleFormInput}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={props.handleFormInput}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
