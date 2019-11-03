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

            <form>
              <p className="user-editor__text">Elige tu estado</p>
              <label for="happy">Happy</label>
              <input id="happy" type="radio" name="status" value="happy"/>
              <label for="sad">Sad</label>
              <input id="sad" type="radio" name="status" value="sad"/>
            </form>

          </section>
          <section className="section__user-days"></section>
        </main>
      </div>
    );
  }
}

export default App;
