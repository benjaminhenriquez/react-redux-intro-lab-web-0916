
import React from 'react'

export default function NewInventoryItem (props){

  function submitItemForm(event) {
      event.preventDefault();
      const quantity = event.target.children[1].value
      const description = event.target.children[3].value
      props.triggerCreateItem(quantity, description)
    }

    return (
      <form onSubmit={submitItemForm}>
        <label>new item quantity:</label>
        <input className="form-control"/>
         <label>new item description:</label>
        <input className="form-control"/>
        <input type="submit" />
      </form>
    )
}
