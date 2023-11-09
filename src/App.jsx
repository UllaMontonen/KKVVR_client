import { useState } from 'react'
import CheckTicket from './components/CheckTicket';
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // HOX !!!
    // tähän pitää vielä API kutsu rakentaa. Laitoin nyt alertin niin näkee että toimii tuo
    // rakennan APIn myöhemmin
    alert(username + " " + password);
  }

  return (
    <>
      <div>
        <h1>Login to TicketGuru service</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="inputText">
            <p>Username</p>
            <input
              id="username"
              autoComplete="username"
              className="inputContainer"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text" />
          </div>
          <div className="inputText">
            <p>Password</p>
            <input 
            id="password"
            autoComplete="current-password"
            className="inputContainer"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" />
          </div>
          <div className="space"></div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <small className="copyright">&copy; SK(R)UM team</small>
      </div>
      < CheckTicket username={username} password={password} />
    </>
  )
}

export default App