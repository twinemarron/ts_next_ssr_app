import { Actions } from '../actions'

interface Todo {
  id: string
  done: boolean
  task: string
}

interface State {
  todos: Todo[]
}

export function initialState(injects?: State): State {
  return {
    todos: [],
    ...injects,
  }
}

export function reducer(state = initialState(), action: Actions): State {
  switch (action.type) {
    case 'TODOS_ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] }
    case 'TODOS_DONE_TODO':
      return {
        ...state,
        todos: [...state.todos].map((val: any) => ({
          ...val,
          ...(val.id === action.payload.id ? { done: !val.done } : {}),
        })),
      }
    case 'TODOS_REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((val: any) => val.id !== action.payload.id),
      }
    default:
      return state
  }
}
