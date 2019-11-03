import React from 'react';

class UserDaysHistory extends React.Component {
  render() {
    return(
      <li className="history__list__day">
        {this.props.objectData.status === "happy"? 
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
}

export default UserDaysHistory;