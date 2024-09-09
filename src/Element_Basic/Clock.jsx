import React from 'react';

function Clock(props) {
  return (
    <div>
      <h1> Hi React</h1>
      <h2>now : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
