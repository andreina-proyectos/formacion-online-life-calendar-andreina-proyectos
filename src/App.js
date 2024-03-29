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

  componentDidMount() {
    const lsUserDays = localStorage.getItem('userDaysData');
    if(lsUserDays) {
     const lsUserDaysInfo = JSON.parse(lsUserDays);
     this.setState({userData:lsUserDaysInfo});
    }
  }

  saveUserDay = (userDataObject) => {
    const userDayDataArray = this.state.userData;
    userDayDataArray.push(
      userDataObject
    )
    this.setState({
      userData: userDayDataArray
    });
    localStorage.setItem('userDaysData', JSON.stringify(userDayDataArray));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header__title">Life Calendar</h1>
          <h4 className="header__subtitle">Elige una fecha y un emoji para añadir tu estado de ánimo</h4>
        </header>

        <main className="app__main-wrapper">
        <Switch>
        <Route exact path="/" render={() => {
            return (
              <section className="section__user-days-history">
                <Link className="history__button-go-editor" to="/user-editor">+</Link>
                  <ul className="history__list">
                  {this.state.userData
                    .sort((obj1, obj2) => {
                      const dateObject1FormatedMiliSeconds = new Date(obj1.date.split('/').reverse().join('/')).getTime();
                      const dateObject2FormatedMiliSeconds = new Date(obj2.date.split('/').reverse().join('/')).getTime();
                      return dateObject1FormatedMiliSeconds - dateObject2FormatedMiliSeconds;
                    })
                    .map(
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
