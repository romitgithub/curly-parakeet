import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import AddTodo from './addTodo'
import TodosList from './todosList'
import { addTodo, selectTodos, Todo, toggleTodo } from './todosSlice'

export default function Todos() {
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()

  useEffect(() => {}, [])

  const handleTodoSubmit = (todo: Todo) => {
    dispatch(addTodo(todo))
  }

  const handleTodoToggle = (id: string) => {
    dispatch(toggleTodo({ id }))
  }

  console.log(todos)
  return (
    <div className='container p-2 mx-auto max-w-md'>
      <AddTodo onAdd={handleTodoSubmit} />
      <TodosList onToggle={handleTodoToggle} todos={todos} />
    </div>
  )
}
