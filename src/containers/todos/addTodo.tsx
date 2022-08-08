import React from 'react'
import { Todo } from './todosSlice'

interface AddTodoProps {
  onAdd: (todo: Todo) => void
}

export default function AddTodo(props: AddTodoProps) {
  const { onAdd } = props
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value
    if (e.key === 'Enter' && text.trim()) {
      e.currentTarget.value = ''
      onAdd({ text, completed: false })
    }
  }
  return (
    <div>
      <label htmlFor='todo' className='block text-md font-medium text-gray-700'>
        <div className='mt-1'>
          <input
            type='text'
            name='todo'
            id='todo'
            onKeyUpCapture={handleKeyUp}
            className='px-3 py-4 shadow-sm text-xl focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 bg-gray-100 rounded-md'
            placeholder='Shoppping, go karting, lunch, mobie...'
          />
        </div>
      </label>
    </div>
  )
}
