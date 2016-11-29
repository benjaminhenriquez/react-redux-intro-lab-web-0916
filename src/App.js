import React, { Component } from 'react';
import {connect} from 'react-redux'
import InventoryList from './InventoryList';
import NewInventoryItem from './NewInventoryItem'
import {bindActionCreators} from 'redux'
import {getInventoryListItems} from './actions/inventoryItemsActions'
import {addInventoryItem} from './actions/inventoryItemsActions'

class App extends Component {
  constructor(){
    super();
    this.createItem = this.createItem.bind(this)
  }

  createItem(event){
    this.props.addInventoryListItem(quantity,description)

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
        </div>
          < InventoryList inventoryItems={this.props.inventoryListItems}/>
          < NewInventoryItem createItem = {this.createItem}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {inventoryListItems: state.inventoryListItems}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getInventoryListItems, addInventoryItem }, dispatch)
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent;
