import React, { Component } from 'react';
import './App.css';

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
      </div>
    )
  }
}
