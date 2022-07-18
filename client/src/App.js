import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = { users: [], images: null };
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('/users')
      .then(res => {
        return res.json()
      })
      .then(users => {
        this.setState({ users })
      });
  }

  refreshPage() {
    window.location.reload();
  }

  render() {
    return (
      <div className="App" >
        <h1>Racers</h1>
        <button onClick={this.refreshPage}>Reset</button>
        <div style={{ position: 'absolute', left: '30%' }}>
          {this.state.users.map(user =>
            <div style={{ width: '600px', border: '2px solid blue' }} key={user.id}>
              <div>
                <h2>{user.firstname} {user.lastname}</h2>
              </div>
              <div>
                <img style={{ width: '150px', border: '2px solid black' }} alt="racer" src={require('./images/' + user.code.toLowerCase() + '.png')} />
              </div>
              <div>
                <div style={{ display: 'inline', justifyContent: 'center' }}><b>Code: </b><p>{user.code}</p></div>
                <div style={{ display: 'inline', justifyContent: 'center' }}><b>Country: </b><p>{user.country}</p></div>
                <div style={{ display: 'inline', justifyContent: 'center' }}><b>Team: </b><p>{user.team}</p></div>
              </div>
            </div>
          )
          }
        </div>
      </div >
    );
  }
}
export default App;