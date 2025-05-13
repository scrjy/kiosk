// src/components/StartScreen.jsx
export default function StartScreen({ onStart }) {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '3rem' }}>☕ 환영합니다!</h1>
      <p style={{ fontSize: '1.5rem' }}>터치하여 주문을 시작하세요</p>
      <button
        onClick={onStart}
        style={{
          marginTop: '40px',
          fontSize: '2rem',
          padding: '20px 40px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          marginRight: '20px', // 오른쪽 간격 추가
        }}
      >
        포장
      </button>
      <button
        onClick={onStart}
        style={{
          marginTop: '40px',
          fontSize: '2rem',
          padding: '20px 40px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          marginLeft: '20px',
        }}
      >
        매장
      </button>
    </div>
  )
}
