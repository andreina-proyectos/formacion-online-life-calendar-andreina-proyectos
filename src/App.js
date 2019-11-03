import React from 'react';
import './App.css';
import Calendar from 'react-calendar'

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header__title">Life Calendar</h1>
          <h2 className="header__subtitle">Elige la fecha y un smiley para añadir tu estado de ánimo</h2>
        </header>
        <main className="app__main-wrapper">
          <section className="section__user-editor">
          <Calendar />
          </section>
          <section className="section__user-days"></section>
        </main>
      </div>
    );
  }
}

export default App;
