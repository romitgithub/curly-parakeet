import { CheckCircleIcon as CheckCircleOutline } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import React, { KeyboardEventHandler } from 'react'
import OverflowMenu from '../../components/OverflowMenu'
import { TODO_MENU_OPTIONS } from '../../constants'
import { classNames } from '../../utils/styles'
import { TodoWithId } from './todosSlice'

export const MENU_OPTIONS = [
  { label: 'Edit', value: TODO_MENU_OPTIONS.EDIT_TODO },
  { label: 'Delete', value: TODO_MENU_OPTIONS.DELETE_TODO },
]

interface TodoItemProps {
  todo: TodoWithId
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const handleItemClick = () => {
    onToggle(todo.id)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onToggle(todo.id)
    }
  }

  const handleMenuChange = (e: React.MouseEvent<HTMLButtonElement>, menu: string) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    switch (menu) {
      case TODO_MENU_OPTIONS.EDIT_TODO:
        console.log('edit')
        break
      case TODO_MENU_OPTIONS.DELETE_TODO:
        onDelete(todo.id)
        break
      default:
        break
    }
  }

  return (
    <li className='z-10 hover:bg-gray-50 focus:bg-gray-50 focus-visible:bg-gray-50'>
      <div
        className='flex flex-row items-center px-2 py-4'
        role='button'
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={handleItemClick}
      >
        {todo.completed ? (
          <CheckCircleIcon className='cursor-pointer w-6 h-6 text-green-500' />
        ) : (
          <CheckCircleOutline className='cursor-pointer  w-6 h-6' />
        )}

        <p
          className={classNames(
            'flex-1 text-lg align-middle mx-3',
            todo.completed ? 'line-through' : '',
          )}
        >
          {todo.text}
        </p>
        <OverflowMenu onChange={handleMenuChange} options={MENU_OPTIONS} />
      </div>
    </li>
  )
}
