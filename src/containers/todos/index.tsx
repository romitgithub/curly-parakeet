import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import RadioGroup from '../../components/RadioGroup'
import { TODOS_FILTER_TYPE } from '../../constants'
import AddTodo from './addTodo'
import TodosList from './todosList'
import { addTodo, selectTodos, setFilterType, Todo, toggleTodo } from './todosSlice'

export const FilterOptions = [
  {
    id: TODOS_FILTER_TYPE.SHOW_ALL,
    title: 'All',
  },
  {
    id: TODOS_FILTER_TYPE.SHOW_COMPLETED,
    title: 'Completed',
  },
  {
    id: TODOS_FILTER_TYPE.SHOW_PENDING,
    title: 'Pending',
  },
]

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

  const handleFilterChange = (id: string) => {
    dispatch(setFilterType(id))
  }

  return (
    <div className='container p-2 mx-auto max-w-md'>
      <AddTodo onAdd={handleTodoSubmit} />
      <RadioGroup
        onChange={handleFilterChange}
        options={FilterOptions}
        defaultChecked={TODOS_FILTER_TYPE.SHOW_ALL}
      />
      <TodosList onToggle={handleTodoToggle} todos={todos} />
    </div>
  )
}
