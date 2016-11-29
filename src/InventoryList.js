import React from 'react'

export default function InventoryList (props){
// debugger
const allItems = props.inventoryItems.map(function(item){return <li>item: {item.description}, quantity: {item.quantity}</li>})

    return (
    <ul>{allItems}</ul>
    )
}
