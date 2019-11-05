import React from 'react';
import Calendar from 'react-calendar';
import './UserDaysEditor.scss';
import { Link } from 'react-router-dom';

class UserDaysEditor extends React.Component {
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
      checkedRadio = sadRadio.value;
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
    this.props.saveUserDay(userData);
    window.location.hash = "#/";
  }

  handleClickSad = (event) => {
    const textAreaElement = document.querySelector('.textarea');
    textAreaElement.setAttribute("disabled", true);
  }

  render() {
    return(
      <React.Fragment>
        <section className="section__user-editor">
            <form id="form" className="user-editor__form">
            <Calendar 
              onChange={this.handleChangeCalendar}
            />
            <input placeholder="date" required id="inputUserDate" type="text" name="selected-date"/>
              <div className="user-editor__radio">
                <h3 className="user-editor__text">Elige tu estado</h3>
                <label htmlFor="happy"><span role="img" aria-label="happy">😊</span></label>
                <input className="radio-input" required id="happy" type="radio" name="status" value="happy"/>
                <label htmlFor="sad"><span role="img" aria-label="sad">😔</span></label>
                <input onClick={this.handleClickSad} className="radio-input" required id="sad" type="radio" name="status" value="sad"/>
              </div>
              <div className="user-editor__textarea">
                <h3 className="user-editor__text">Escribe por qué tu día fue tan bueno</h3>
                <textarea className="textarea"  id="text-area" rows="4" cols="50">
                </textarea>
              </div>
              <div className="user-editor__buttons">
                <button className="editor__button" onClick={this.handleGetUserData} type="submit" form="form1" value="Submit">Guardar</button>
                <Link className="editor__button-go-history" to="/">
                  <button className="editor__button" type="submit" form="form1" value="Submit">Cancelar</button>
                </Link>
              </div>
            </form>
          </section>
      </React.Fragment>
    )
  }
}

export default UserDaysEditor;