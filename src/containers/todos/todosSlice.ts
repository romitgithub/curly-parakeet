import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { RootState } from '../../app/store'

export interface Todo {
  text: string
  completed: boolean
}

export interface TodoWithId extends Todo {
  id: string,
  createdAt: number,
}

export interface TodosState {
  todos: TodoWithId[]
}

const initialState: TodosState = {
  todos: [],
}

export const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const newTodo = {
        ...action.payload,
        id: uuidv4(),
        createdAt: new Date().getTime()
      }
      state.todos.push(newTodo) // action.payload is the new todo
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})

export const { addTodo, toggleTodo } = TodosSlice.actions // action creators
export const selectTodos = (state: RootState) => state.todos.todos // selector

export default TodosSlice.reducer // reducer
