import React from 'react';

const students = [
  { id: 1, name: '이대호' },
  { id: 2, name: '송승준' },
  { id: 3, name: '전준우' },
  { id: 4, name: '김원중' },
  { id: 5, name: '나승엽' },
  { id: 6, name: '박승욱' },
];

function AttendanceBook(p) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
