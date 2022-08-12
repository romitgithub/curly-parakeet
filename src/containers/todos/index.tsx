import { BadgeCheckIcon, ClipboardListIcon, ExclamationIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import BottomDialog from '../../components/BottomDialog'
import RadioGroup from '../../components/RadioGroup'
import { TODOS_FILTER_TYPE } from '../../constants'
import AddTodo from './addTodo'
import EditTodo from './editTodo'
import TodosList from './todosList'
import {
  addTodo,
  deleteTodo,
  selectTodos,
  setFilterType,
  Todo,
  TodoWithId,
  toggleTodo,
  updateTodo,
} from './todosSlice'

export const FilterOptions = [
  {
    id: TODOS_FILTER_TYPE.SHOW_ALL,
    title: 'All',
    icon: () => <ClipboardListIcon className='w-5 h-5' />,
  },
  {
    id: TODOS_FILTER_TYPE.SHOW_COMPLETED,
    title: 'Completed',
    icon: () => <BadgeCheckIcon className='w-5 h-5' />,
  },
  {
    id: TODOS_FILTER_TYPE.SHOW_PENDING,
    title: 'Pending',
    icon: () => <ExclamationIcon className='w-5 h-5' />,
  },
]

export default function Todos() {
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()

  const [isEditTodo, setIsEditTodo] = useState(false)
  const [currentTodo, setCurrentTodo] = useState<TodoWithId | null>(null)

  const handleTodoSubmit = (todo: Todo) => {
    dispatch(addTodo(todo))
  }

  const handleTodoToggle = (id: string) => {
    dispatch(toggleTodo({ id }))
  }

  const handleTodoDelete = (id: string) => {
    dispatch(deleteTodo({ id }))
  }

  const handleTodoUpdate = (id: string, todo: Todo) => {
    dispatch(updateTodo({ id, ...todo }))
    setIsEditTodo(false)
    setCurrentTodo(null)
  }

  const handleTodoEdit = (todo: TodoWithId) => {
    setIsEditTodo(true)
    setCurrentTodo(todo)
  }

  const handleFilterChange = (id: string) => {
    dispatch(setFilterType(id))
  }

  return (
    <div className='flex flex-col w-full flex-1 overflow-hidden'>
      <AddTodo onAdd={handleTodoSubmit} />
      <div className='overflow-hidden flex flex-col flex-1 container mx-auto max-w-md'>
        <RadioGroup
          onChange={handleFilterChange}
          options={FilterOptions}
          defaultChecked={TODOS_FILTER_TYPE.SHOW_ALL}
        />
        <TodosList
          onEdit={handleTodoEdit}
          onToggle={handleTodoToggle}
          onDelete={handleTodoDelete}
          todos={todos}
        />
      </div>
      <BottomDialog isOpen={isEditTodo} onClose={() => setIsEditTodo(false)}>
        <EditTodo onSave={handleTodoUpdate} todo={currentTodo} />
      </BottomDialog>
    </div>
  )
}
