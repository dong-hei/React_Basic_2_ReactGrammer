const scaleNames = {
  km: '킬로미터',
  mile: '마일',
};

function SpeedInput(p) {
  const handleChange = (e) => {
    p.onSpeedChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>속도를 입력해주세요(단위:{scaleNames[p.scale]});</legend>
      <input value={p.speed} onChange={handleChange} />
    </fieldset>
  );
}

export default SpeedInput;
