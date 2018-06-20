import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import CurrentNewStar from '../CurrentNewStar/CurrentNewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      star: {
        name: '',
        role: '',
        show: '',
      }, 
      starList: [
        { name: 'Sarah Michelle Gellar', role: 'Buffy Summers', show: 'Buffy the Vampire Slayer'},
        { name: 'Alyson Hannigan', role: 'Willow Rosenberg', show: 'Buffy the Vampire Slayer'}
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
        show: '',
      },
      starList: [...this.state.starList, this.state.star],
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CurrentNewStar newStar={this.state.star} />
        <NewStarForm newStar={this.state.star} handleChangeFor={this.handleChangeFor} handleSubmit={this.handleSubmit}/>
        <StarList starList={this.state.starList} />
        
      </div>
    )
  }
}

export default App;
