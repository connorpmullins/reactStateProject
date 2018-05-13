import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div class="UserOutput">
      <p>
        Username: {props.username}
      </p>
      <p>
        Pg2 - Here is some text to go with this user output.
      </p>
      {props.children}
    </div>
  )
}

export default userOutput;