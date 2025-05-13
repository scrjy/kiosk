import { useState } from 'react'
import { menu } from './data/menu'
import MenuItem from './components/MenuItem'

function App() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [isPaymentPage, setIsPaymentPage] = useState(false)
  const [isOrderComplete, setIsOrderComplete] = useState(false)

  // 1. 주문 완료 화면
  if (isOrderComplete) {
    return (
      <div style={{ padding: 30, textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem' }}>✅ 주문이 완료되었습니다!</h1>
        <p style={{ fontSize: '2rem' }}>
          {selectedItem.name} - {selectedItem.price}원
        </p>
        <button
          onClick={() => {
            setSelectedItem(null)
            setIsOrderComplete(false)
          }}
          style={buttonStyle}
        >
          처음으로
        </button>
      </div>
    )
  }

  // 2. 결제 화면
  if (isPaymentPage && selectedItem) {
    return (
      <div style={{ padding: 30, textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem' }}>💳 결제하기</h1>
        <p style={{ fontSize: '2rem', marginTop: 20 }}>{selectedItem.name}</p>
        <p style={{ fontSize: '1.8rem' }}>
          총 결제 금액: <strong>{selectedItem.price}원</strong>
        </p>

        <div style={{ marginTop: 40 }}>
          <button
            onClick={() => setIsOrderComplete(true)}
            style={{ ...buttonStyle, backgroundColor: '#28a745' }}
          >
            결제 완료
          </button>
          <button
            onClick={() => setIsPaymentPage(false)}
            style={{
              ...buttonStyle,
              backgroundColor: '#6c757d',
              marginLeft: 20,
            }}
          >
            이전으로
          </button>
        </div>
      </div>
    )
  }

  // 3. 메뉴 선택 화면
  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>
        메뉴를 선택하세요
      </h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          marginTop: 30,
        }}
      >
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onSelect={(item) => {
              setSelectedItem(item)
              setIsPaymentPage(true)
            }}
          />
        ))}
      </div>
    </div>
  )
}

const buttonStyle = {
  fontSize: '1.5rem',
  padding: '15px 30px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
}

export default App
