import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    submittedData: []
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    console.log('submitted')
    event.preventDefault()
    let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    this.setState({firstName: "", lastName: "", submittedData: [...this.state.submittedData, formData]})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form;