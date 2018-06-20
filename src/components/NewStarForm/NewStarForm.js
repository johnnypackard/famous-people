import React, { Component } from 'react';
class NewStarForm extends Component {

  render() {
      return (
          <form onSubmit={this.props.handleSubmit}>
              <input className="inputBox" value={this.props.newStar.name} onChange={this.props.handleChangeFor('name')} placeholder="Name" />
              <input className="inputBox" value={this.props.newStar.role} onChange={this.props.handleChangeFor('role')} placeholder="Role" />
              <input className="inputBox" value={this.props.newStar.show} onChange={this.props.handleChangeFor('show')} placeholder="Show" />
              <input type="submit" value="Add Star" />
          </form>
      );
    }
}

export default NewStarForm;