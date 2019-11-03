import React from 'react';
import './App.css';
import Calendar from 'react-calendar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    }
  }

  handleChangeCalendar = (date) => {
    const inputUserDate = document.querySelector("#inputUserDate");
    inputUserDate.value = date.toLocaleDateString();
  }

  handleGetUserData = () => {
    const inputUserDate = document.querySelector("#inputUserDate");
    const selectedDate = inputUserDate.value;
    const sadRadio = document.getElementById("sad");
    const happyRadio = document.getElementById("happy");
    const textArea = document.getElementById("text-area");
    const textAreaValue = textArea.value;
    console.log(textAreaValue);
    let checkedRadio;
    if(sadRadio.checked) {
      checkedRadio = sadRadio.value
    }
    else {
      checkedRadio = happyRadio.value
    }
    console.log(checkedRadio);
    const userData = {
      date: selectedDate,
      status: checkedRadio,
      message: textAreaValue,
    };
    console.log('soy el objeto', userData);
    const userDayDataArray = this.state.userData;
    userDayDataArray.push(
      userData
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
          <section className="section__user-editor">
            <form id="form" className="user-editor__form">
            <Calendar 
              onChange={this.handleChangeCalendar}
            />
            <input required id="inputUserDate" type="text" name="selected-date"/>
              <div className="user-editor__radio">
                <p className="user-editor__text">Elige tu estado</p>
                <label htmlFor="happy">Happy</label>
                <input required id="happy" type="radio" name="status" value="happy"/>
                <label htmlFor="sad">Sad</label>
                <input required id="sad" type="radio" name="status" value="sad"/>
              </div>
              <div className="user-editor__textarea">
                <p className="user-editor__text">Escribe por qué tu día fue tan bueno</p>
                <textarea id="text-area" rows="4" cols="50">
                </textarea>
              </div>
              <div className="user-editor__buttons">
                <button onClick={this.handleGetUserData} type="submit" form="form1" value="Submit">Guardar</button>
                <button type="submit" form="form1" value="Submit">Cancelar</button>
              </div>
            </form>

          </section>
          <section className="section__user-days"></section>
        </main>
      </div>
    );
  }
}

export default App;
