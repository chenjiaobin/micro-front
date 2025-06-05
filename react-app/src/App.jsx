import React from 'react'
import Counter from './components/Counter'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>React Remote Module</h1>
      <div style={styles.content}>
        <Counter />
        <TodoList />
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px'
  },
  title: {
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '30px'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px'
  }
}

export default App 