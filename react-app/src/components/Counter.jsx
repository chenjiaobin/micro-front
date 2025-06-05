import React, { useState } from 'react'

const Counter = ({ initialCount = 0, onCountChange }) => {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    const newCount = count + 1
    setCount(newCount)
    onCountChange?.(newCount)
  }

  const decrement = () => {
    const newCount = count - 1
    setCount(newCount)
    onCountChange?.(newCount)
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>React Counter</h3>
      <div style={styles.counter}>
        <button style={styles.button} onClick={decrement}>-</button>
        <span style={styles.count}>{count}</span>
        <button style={styles.button} onClick={increment}>+</button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px 0'
  },
  title: {
    margin: '0 0 15px 0',
    color: '#2c3e50'
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer'
  },
  count: {
    fontSize: '20px',
    fontWeight: 'bold',
    minWidth: '40px',
    textAlign: 'center'
  }
}

export default Counter 