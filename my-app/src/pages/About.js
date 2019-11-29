import React, { useState } from 'react';
import HelloComponent from '../components/Hello';

const About = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input onChange={(event) => setName(event.target.value)}/>
      <HelloComponent name={name} />
    </div>
  );
}

export default About;
