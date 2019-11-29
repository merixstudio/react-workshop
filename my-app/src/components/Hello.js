import React from 'react';

const HelloComponent = ({ name }) => {
  return (
    <div className="hello">
      Hello { name }!
    </div>
  )
}

export default HelloComponent;
