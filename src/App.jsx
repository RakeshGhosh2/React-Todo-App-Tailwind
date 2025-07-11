
import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext.js'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((pre) => [{ id: Date.now(), ...todo }, ...pre])
  }

  const updateTodo = (id, todo) => {
    setTodos((pre) => pre.map((item) => (item.id === id ? todo : item)))
  }

  const deleteTodo = (id) => {
    setTodos((pre) => pre.filter((item) => item.id !== id))
  }

  const togglecomplet = (id) => {
    setTodos((pre) =>
      pre.map((prevtodo) =>
        prevtodo.id === id ? { ...prevtodo, completed: !prevtodo.completed } : prevtodo
      )
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, togglecomplet, updateTodo }}>
      <div className=" bg-[url('https://4kwallpapers.com/images/walls/thumbs_3t/22843.jpg')]
    bg-dark-blue min-h-screen py-8 ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white ">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 ">Manage Your ToDos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App

