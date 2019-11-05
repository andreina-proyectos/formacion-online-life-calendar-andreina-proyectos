import React from 'react';
import './UserDaysHistory.scss';

class UserDaysHistory extends React.Component {
  render() {
    const {date, message} = this.props.objectData;

    return(
      <li className="history__list__day tooltip">
        <div>        
        {this.props.objectData.status === "happy"? 
          <p className="happy-face face">
            <span role="img" aria-label="happy-face">&#128522;</span>
            <span className="tooltiptext tooltip">{`message: ${message}`}</span>
          </p>
          :
          <p className="sad-face face">
            <span role="img" aria-label="sad-face">&#128532;</span>
          </p>
      }
        </div>
        <span className="date">{date}</span>
      </li>
    )
  }
}

export default UserDaysHistory;