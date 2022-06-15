import React from 'react'
import './Logout.css'


// Initialize Userfront Core JS
// Userfront.init("demo1234");

// Define the logout button component
export default class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: !localStorage.getItem('token'),
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick=(event) => {
    event.preventDefault();
    // Userfront.logout();
    this.props.setToken('')
    localStorage.removeItem('token')
    
  }

  render() {
    return (
      <button
        id="logout-button"
        onClick={this.handleClick}
        disabled={this.state.disabled}
      >
        Log out
      </button>
    );
  }
}
