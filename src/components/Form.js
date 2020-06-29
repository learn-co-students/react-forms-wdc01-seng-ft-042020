import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
     
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    debugger 
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="firstName" onChange={this.handleFirstNameChange} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        <input type="submit"/>
      </form>
    )
  }
}

export default Form;