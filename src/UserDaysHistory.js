import React from 'react';
import './UserDaysHistory.scss';

class UserDaysHistory extends React.Component {
  render() {
    return(
      <li className="history__list__day">
        {this.props.objectData.status === "happy"? 
          <p className="happy-face face">
            &#128522;
          </p>
          :
          <p className="sad-face face">
            &#128532;
          </p>
      }
      </li>
    )
  }
}

export default UserDaysHistory;