import { CheckCircleIcon as CheckCircleOutline } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import React, { KeyboardEventHandler } from 'react'
import { classNames } from '../../utils/styles'
import { TodoWithId } from './todosSlice'

interface TodoItemProps {
  todo: TodoWithId
  onToggle: (id: string) => void
}

export default function TodoItem({ todo, onToggle }: TodoItemProps) {
  const handleItemClick = () => {
    onToggle(todo.id)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onToggle(todo.id)
    }
  }

  return (
    <li className='hover:bg-gray-50 focus:bg-gray-50 focus-visible:bg-gray-50'>
      <div
        className='flex flex-row items-center px-2 py-5'
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
          className={classNames('text-xl align-middle ml-3', todo.completed ? 'line-through' : '')}
        >
          {todo.text}
        </p>
      </div>
    </li>
  )
}
