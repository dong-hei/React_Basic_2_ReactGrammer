import React from 'react';
import Book from './Book';

function Library(props) {
  return (
    <div>
      <Book name="1Q84" numOfPage={500} />
      <Book name="비가 오면 열리는 상점" numOfPage={330} />
      <Book name="불편한 편의점" numOfPage={350} />
      <Book name="나의 돈키호테" numOfPage={340} />
      <Book name="대한민국 돈의 역사" numOfPage={480} />
    </div>
  );
}

export default Library;
