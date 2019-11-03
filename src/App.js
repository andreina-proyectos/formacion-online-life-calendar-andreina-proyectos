import React from 'react';
import './App.css';
import UserDaysEditor from './UserDaysEditor';
import UserDaysHistory from './UserDaysHistory';
import { Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    }
  }

  saveUserDay = (userDataObject) => {
    const userDayDataArray = this.state.userData;
    userDayDataArray.push(
      userDataObject
    )
    this.setState({
      userData: userDayDataArray
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header__title">Life Calendar</h1>
          <h2 className="header__subtitle">Elige la fecha y un smiley para añadir tu estado de ánimo</h2>
        </header>

        <main className="app__main-wrapper">
        <Switch>
        <Route exact path="/" render={() => {
            return (
              <section className="section__user-days-history">
                <Link className="history__button-go-editor" to="/user-editor">+</Link>
                  <ul className="history__list">
                  {this.state.userData.map(
                    objectData => {
                      return(
                        <UserDaysHistory
                          objectData = {objectData}
                        />
                      )
                    }
                  )}
                  </ul>
              </section>
            )
        }}
        />

        <Route exact path="/user-editor" render={() => {
          return (
            <UserDaysEditor
              saveUserDay = {this.saveUserDay}
            />
          )
        }}
        />

        </Switch>   
        </main>
      </div>
    );
  }
}

export default App;
