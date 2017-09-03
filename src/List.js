import React, { Component } from 'react';
import ListItem from './ListItem.js';
import './style/list.css';

class List extends Component {

  constructor() {
    super();

    this.state = {
      inputValue: '',
      items: []
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const items = this.state.items.slice();
    items.push({ text: this.state.inputValue, isDone: false });

    this.setState({
      inputValue: '',
      items: items
    });
  }

  handleInputChange = (evt) => {
    this.setState({
      inputValue: evt.target.value
    })
  }

  toggleItem(index) {
    const items = this.state.items.slice();
    items[index].isDone = !items[index].isDone;

    this.setState({
      items: items
    });
  }

  render() {
    console.log('render', this.state);

    let itemList;
    if (this.state.items.length > 0) {
      itemList = <ul>
        {this.state.items.map((item, index) => {
          return <ListItem key={index} item={item} todoClick={() => this.toggleItem(index)} />
        })}
      </ul>
    }
    else {
      itemList = <p>Hello! Add some stuff to the list! Add above!</p>
    }
    return (
      <div className="app">
        <div className="header">
          <h1>A Cool List For Your Listing Needs</h1>
          <h3>Utilizing React!</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
        </form>
        {itemList}
      </div>
    );
  }
}

export default List;
