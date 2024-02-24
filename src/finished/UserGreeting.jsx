
function UserGreeting(props){

  const welcomeMessage = <h2 className="welcome-message">Welcome {props.name}</h2>

  const loginMessage = <h2 className="login-prompt">Please log in</h2>

  if (props.isLoggedIn) {
    return (props.isLoggedIn ? welcomeMessage : loginMessage)
  }
}

export default UserGreeting;