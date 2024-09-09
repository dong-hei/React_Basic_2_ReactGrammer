import React, { useState } from 'react';

function SignUp(props) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('남');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        성별:
        <select value={gender} onChange={handleChangeGender}>
          <option value={'남'}>남</option>
          <option value={'여'}>여</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
