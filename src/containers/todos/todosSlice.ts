import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { RootState } from '../../app/store'
import { TODOS_FILTER_TYPE } from '../../constants'

export interface Todo {
  text: string
  completed: boolean
}

export interface TodoWithId extends Todo {
  id: string
  createdAt: number
}

export interface TodosState {
  filterType: string
  todos: TodoWithId[]
}

const initialState: TodosState = {
  todos: [],
  filterType: TODOS_FILTER_TYPE.SHOW_ALL,
}

export const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const newTodo = {
        ...action.payload,
        id: uuidv4(),
        createdAt: new Date().getTime(),
      }
      state.todos.push(newTodo) // action.payload is the new todo
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    updateTodo: (state, action) => {
      const { id, ...data } = action.payload
      const todo = state.todos.find((t) => t.id === id)
      if (todo) {
        todo.text = data.text
        todo.completed = data.completed
      }
    },
    deleteTodo: (state, action) => ({
      ...state,
      todos: state.todos.filter((t) => t.id !== action.payload.id),
    }),
    setFilterType: (state, action) => ({
      ...state,
      filterType: action.payload,
    }),
  },
})

export const { addTodo, toggleTodo, deleteTodo, updateTodo, setFilterType } = TodosSlice.actions // action creators

export const selectTodos = (state: RootState) => {
  if (state.todos.filterType === TODOS_FILTER_TYPE.SHOW_COMPLETED) {
    return state.todos.todos.filter((t) => t.completed) // filter out the todos that are not completed
  }
  if (state.todos.filterType === TODOS_FILTER_TYPE.SHOW_PENDING) {
    return state.todos.todos.filter((t) => !t.completed) // filter out the todos that are completed (filter out the todos that are completed)
  }

  return state.todos.todos
} // selector

export default TodosSlice.reducer // reducer
