export default function MenuItem({ item, onSelect }) {
  return (
    <div
      style={{
        border: '2px solid #333',
        padding: 20,
        width: 200, // 고정 너비로 정렬 잘 되게
        textAlign: 'center',
        borderRadius: 10,
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: '50%',
          height: '140px',
          objectFit: 'contain',
          borderRadius: '8px',
          marginBottom: '10px',
        }}
      />

      <h2 style={{ fontSize: '1.5rem' }}>{item.name}</h2>
      <p style={{ fontSize: '1.2rem' }}>{item.price}원</p>
      <button
        onClick={() => onSelect(item)}
        style={{
          fontSize: '1.2rem',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          marginTop: 10,
        }}
      >
        주문하기
      </button>
    </div>
  )
}
