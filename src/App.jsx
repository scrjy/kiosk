import { useState } from 'react'
import { menu } from './data/menu'
import MenuItem from './components/MenuItem'
import StartScreen from './components/StartScreen'

function App() {
  const [started, setStarted] = useState(false) // 주문 시작 여부
  const [selectedItem, setSelectedItem] = useState(null)
  const [isPaymentPage, setIsPaymentPage] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [isOrderComplete, setIsOrderComplete] = useState(false)

  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />
  }

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
            setStarted(false)
            setSelectedItem(null)
            setIsOrderComplete(false)
            setPaymentMethod(null)
            setIsPaymentPage(false)
          }}
          style={buttonStyle}
        >
          처음으로
        </button>
      </div>
    )
  }

  // 3. 결제 수단 선택 및 안내
  if (isPaymentPage && selectedItem) {
    if (!paymentMethod) {
      return (
        <div style={{ padding: 30, textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem' }}>💳 결제하기</h1>
          <p style={{ fontSize: '1.8rem', margin: '20px 0' }}>
            {selectedItem.name}
          </p>
          <p style={{ fontSize: '2rem', marginBottom: '40px' }}>
            총 결제 금액: <strong>{selectedItem.price}원</strong>
          </p>
          <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
            결제 수단을 선택해주세요
          </p>

          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}
          >
            <button
              style={{ ...buttonStyle, backgroundColor: '#28a745' }}
              onClick={() => setPaymentMethod('cash')}
            >
              💵 현금
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: '#007bff' }}
              onClick={() => setPaymentMethod('card')}
            >
              💳 카드
            </button>
          </div>

          <button
            onClick={() => {
              setIsPaymentPage(false)
              setSelectedItem(null)
            }}
            style={{
              ...buttonStyle,
              marginTop: 30,
              backgroundColor: '#6c757d',
            }}
          >
            ⬅ 이전으로
          </button>
        </div>
      )
    }

    // 3-2. 결제 안내 메시지
    return (
      <div style={{ padding: 30, textAlign: 'center' }}>
        {paymentMethod === 'cash' && (
          <>
            <h1 style={{ fontSize: '2.5rem' }}>💵 현금 결제</h1>
            <p style={{ fontSize: '1.8rem', marginTop: 30 }}>
              결제하실 금액을 투입구에 넣어주세요
            </p>
            <img src="/cash.png" width={400} />
          </>
        )}
        {paymentMethod === 'card' && (
          <>
            <h1 style={{ fontSize: '2.5rem' }}>💳 카드 결제</h1>
            <p style={{ fontSize: '1.8rem', marginTop: 30 }}>
              결제하실 카드를 투입구에 꽂아주세요
            </p>
            <img src="/card.png" width={300} />
          </>
        )}

        <div style={{ marginTop: 50 }}>
          <button
            onClick={() => setIsOrderComplete(true)}
            style={{ ...buttonStyle, backgroundColor: '#28a745' }}
          >
            결제 완료
          </button>
        </div>
      </div>
    )
  }

  // 3. 메뉴 선택 화면
  // 메뉴 선택 화면
  return (
    <div style={{ padding: 30 }}>
      <button
        onClick={() => {
          setStarted(false)
          setSelectedItem(null)
          setIsPaymentPage(false)
        }}
        style={{
          fontSize: '1.2rem',
          padding: '10px 20px',
          marginBottom: '20px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        ⬅ 이전으로
      </button>

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
              setPaymentMethod(null) // 이전 결제 수단 초기화
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
