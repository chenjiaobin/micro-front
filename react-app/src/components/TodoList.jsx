import React, { useState } from 'react'

const TodoList = ({ onTodoChange }) => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const newTodos = [...todos, { id: Date.now(), text: inputValue, completed: false }]
      setTodos(newTodos)
      setInputValue('')
      onTodoChange?.(newTodos)
    }
  }

  const toggleTodo = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(newTodos)
    onTodoChange?.(newTodos)
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>React Todo List</h3>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="添加新任务..."
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
        />
        <button style={styles.button} onClick={handleAddTodo}>
          添加
        </button>
      </div>
      <ul style={styles.list}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={styles.todoItem}
            onClick={() => toggleTodo(todo.id)}
          >
            <span style={{
              ...styles.todoText,
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : '#333'
            }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
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
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px'
  },
  input: {
    flex: 1,
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px'
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  todoItem: {
    padding: '10px',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  todoText: {
    fontSize: '14px'
  }
}

export default TodoList 