import React from 'react';
import './UserDaysHistory.scss';

class UserDaysHistory extends React.Component {
  render() {
    return(
      <li className="history__list__day tooltip">
        {this.props.objectData.status === "happy"? 
          <p className="happy-face face">
            &#128522;
          </p>
          :
          <p className="sad-face face">
            &#128532;
          </p>
      }

        <span className="tooltiptext">{this.props.objectData.date}</span>
      </li>
    )
  }
}

export default UserDaysHistory;