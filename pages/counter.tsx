import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../components/Layout'
import { increment, decrement } from '../store/counter/actions'
import { addTodo, doneTodo, removeTodo } from '../store/todos/actions'

export default function Counter() {
  const dispatch = useDispatch()
  const currentCount = useSelector((state: any) => {
    return state.counter
  })
  const currentTodos = useSelector((state: any) => {
    return state.todos
  })

  const [text, setText] = useState('')
  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (text === '') return
    dispatch(addTodo(text))
    setText('')
  }
  return (
    <Layout>
      <p>This is the Counter page</p>
      <p>{currentCount.count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(decrement())
          }}
        >
          {' - '}
        </button>
        <button
          onClick={() => {
            dispatch(increment())
          }}
        >
          {' + '}
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(event: any) => {
              setText(event.target.value)
            }}
          />
          <button>追加</button>
        </form>
      </div>
      <div>
        <ul>
          {currentTodos.todos.map((val: any, index: number) => (
            <li key={index}>
              <span style={val.done ? { textDecoration: 'line-through' } : {}}>
                {val.task}
              </span>
              <span
                onClick={() => {
                  dispatch(doneTodo(val.id))
                }}
              >
                {`${val.done ? ' 🍙 ' : ' ✅ '}`}
              </span>
              <span
                onClick={() => {
                  dispatch(removeTodo(val.id))
                }}
              >{` ❎ `}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
