import React, { useState } from 'react';

// 거의 사용하지 않는 class component말고 function component로 바꾼다
// class ConfirmBtn extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isConfirmed: false,
//     }; // 확인여부를 저장하기 위함

//     // this.handleConfirm = this.handleConfirm.bind(this); //this는 반드시 바인드로 감싸줘야한다.
//     //제거하는대신 handleConfirm을 Arrow Function을 대체;
//   }

//   handleConfirm = () => {
//     this.setState((prevState) => ({
//       isConfirmed: !prevState.isConfirmed,
//     }));
//   };

// render() {
//   return (
//     <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
//       {this.state.isConfirmed ? '확인됨' : '확인하기'}
//     </button>
//   );
// }
// }

//function component
function ConfirmBtn(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
      {isConfirmed ? '확인됨' : '확인하기'}
    </button>
  );
}

export default ConfirmBtn;
