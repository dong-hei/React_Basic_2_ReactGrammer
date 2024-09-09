import React, { useState, useEffect } from 'react';
import UseCounter from './UseCounter';

const MAX_CAPA = 10;

function Accomodate(p) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = UseCounter(0);

  useEffect(() => {
    console.log('================');
    console.log('useEffect called');
    console.log(`isFull: ${isFull}`);
  }); // 의존성 배열이 없다. 마운트된 직후 호출, 업뎃될때마다 호출

  useEffect(() => {
    setIsFull(count >= MAX_CAPA); //최대 카운트
    console.log(`Current count val: ${count}`);
  }, [count]); // 의존성배열이 있다. 마운트된 직후 호출, 카운트 값이 바뀔때마다 호출

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>
      {isFull && <p style={{ color: 'red' }}> 정원이 가득 찼습니다.</p>}
      {/* 최대카운트 초과시 경고 메시지 */}
    </div>
  );
}

export default Accomodate;
