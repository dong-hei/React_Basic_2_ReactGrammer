import React, { useState } from 'react';

//초기 카운트값을 파람으로 받아서 카운트라는 이름의 State를 생성하고 값을 제공하고 증가 및 감소를 편리하게 할수있는 함수를 제공
const UseCounter = (initialVal) => {
  const [count, setCount] = useState(initialVal);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0)); // 값이 마이너스로 내려가지 않는다.

  return [count, increaseCount, decreaseCount];
};

export default UseCounter;
