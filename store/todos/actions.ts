// import uuid from 'uuid/v4'
import { v4 as uuidv4 } from 'uuid'
import types from './types'

export function addTodo(task: string) {
  return {
    type: types.addTodo,
    payload: {
      id: uuidv4(),
      done: false,
      task,
    },
  }
}

export function doneTodo(id: string) {
  console.log('doneTodo id ======= : ', id)
  return {
    type: types.doneTodo,
    payload: { id },
  }
}

export function removeTodo(id: string) {
  return {
    type: types.removeTodo,
    payload: { id },
  }
}
