import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '조선의 4번타자',
    comment: '안녕하세요, 최강야구의 이대호입니다.',
  },
  { name: '전준우', comment: '안녕하세요, 롯데자이언츠 주장 전준우입니다.' },
  { name: '류현진', comment: '안녕하세요, 한화이글스 투수 류현진입니다.' },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((c) => {
        return <Comment name={c.name} comment={c.comment} />;
      })}
    </div>
  );
}

export default CommentList;
