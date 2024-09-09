function Card(props) {
  const { title, backgroundColor, children } = props;
  // 타이틀,백그라운드컬러 스페셜라이제이션
  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: '0px 0px 4px grey',
        backgroundColor: backgroundColor || 'white',
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
      {/* 컨테이먼트 */}
    </div>
  );
}

export default Card;
