import React, { Component } from 'react';
import './App.css';
// import StarList from '../CurrentNewStar/CurrentNewStar';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      star: {
        name: '',
        role: '',
      }, 
      starList: [
        { name: 'Sarah Michelle Gellar', role: 'Buffy Summers in BtVS'},
        { name: 'Alyson Hannigan', role: 'Willow Rosenberg in BtVS'}
      ],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      star: {
        ...this.state.star,
        [propertyName]: event.target.value
      }
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log(this.state.star);
    this.setState({
      star: {
        name: '',
        role: '',
      },
      starList: [...this.state.starList, this.state.star],
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Famous People</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.star.name} onChange={this.handleChangeFor('name')} placeholder="Name" />
          <input value={this.state.star.role} onChange={this.handleChangeFor('role')} placeholder="Role" />
          <input type="submit" value="Add Star" />
        </form>
        <ul>
          {
            this.state.starList.map(star => <li key={star.name}>
              {star.name} is famous for portraying {star.role}
              </li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
