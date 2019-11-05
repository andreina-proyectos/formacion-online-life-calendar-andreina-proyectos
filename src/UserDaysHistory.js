import React from 'react';
import './UserDaysHistory.scss';

class UserDaysHistory extends React.Component {
  render() {
    return(
      <li className="history__list__day tooltip">
        {this.props.objectData.status === "happy"? 
          <p className="happy-face face">
            <span role="img" aria-label="happy-face">&#128522;</span>
          </p>
          :
          <p className="sad-face face">
            <span role="img" aria-label="sad-face">&#128532;</span>
          </p>
      }

        <span className="tooltiptext">{this.props.objectData.date}</span>
      </li>
    )
  }
}

export default UserDaysHistory;