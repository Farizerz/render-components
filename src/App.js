import React, { Component } from 'react';
import './App.css';
import './ListItem';
import ListItem from './ListItem';

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      currentItem: {
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e) {
    e.preventDefault(); 
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text != "") {
      const items=[...this.state.items, newItem];
      this.setState({
        items: newItem,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text" value= {this.state.currentItem.text} onChange={this.handleInput} />  
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItem items = {this.state.items}></ListItem>
      </div>
    )
  }
}
