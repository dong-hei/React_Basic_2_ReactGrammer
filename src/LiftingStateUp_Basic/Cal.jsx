import React, { useState } from 'react';
import SpeedInput from './SpeedInput';

function SpeedingVerdict(p) {
  if (p.km >= 100) {
    return (
      <p>
        <font color="red">과속</font>입니다.
      </p>
    );
  }
  return <p>과속이 아닙니다.</p>;
}

function tomile(mile) {
  return mile * 0.62;
}

function tokm(km) {
  return km * 1.609344;
}

function tryConvert(speed, convert) {
  const input = parseFloat(speed);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Cal(p) {
  const [speed, setSpeed] = useState('');
  const [scale, setScale] = useState('km');

  const handleKmChange = (speed) => {
    setSpeed(speed);
    setScale('km');
  };

  const handleMileChange = (speed) => {
    setSpeed(speed);
    setScale('mile');
  };

  const mile = scale === 'mile' ? tryConvert(speed, tomile) : speed;

  const km = scale === 'km' ? tryConvert(speed, tokm) : speed;

  return (
    <div>
      <SpeedInput scale="km" speed={km} onSpeedChange={handleMileChange} />
      <SpeedInput scale="mile" speed={mile} onSpeedChange={handleKmChange} />
      <SpeedingVerdict km={parseFloat(km)} />
    </div>
  );
}

export default Cal;
