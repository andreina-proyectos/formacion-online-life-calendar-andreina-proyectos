import React from 'react';
import './App.css';
import UserDaysEditor from './UserDaysEditor';

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
          <UserDaysEditor
            saveUserDay = {this.saveUserDay}
          />
          <section className="section__user-days-history">
            <ul className="history__list">
             {this.state.userData.map(
               objectData => {
                 return(
                   <li className="history__list__day">
                    {objectData.status === "happy"? 
                      <p className="happy-face face">
                        {":)"}
                      </p>
                      :
                      <p className="sad-face face">
                      {":("}
                    </p>
                  }
                   </li>
                 )
               }
              )}
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
