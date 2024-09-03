import './styles.css';
import { useState } from 'react';

export default function App() {
  const [newItem, setNewItem] = useState("")

  const [todos, setTodos] = useState([])
  function handlerSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })
  }
  return (
    <>
      <form action="" onSubmit={handlerSubmit} className='new-item-form'>
        <div className="form-row">
          <label htmlFor="item" className="">New item</label>
          <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} id='item' />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo => {
          return (
            <li>
              <label>
                <input type="text" type="checkbox" checked={todo.completed} />
                {todo / title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}