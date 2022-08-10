import React from 'react'
import { Todo } from './todosSlice'

interface AddTodoProps {
  onAdd: (todo: Todo) => void
}

export default function AddTodo(props: AddTodoProps) {
  const { onAdd } = props

  const [value, setValue] = React.useState('')

  const handleAddTodo = (text: string) => {
    onAdd({ text, completed: false })
    setValue('')
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value
    if (e.key === 'Enter' && text.trim()) {
      e.currentTarget.value = ''
      handleAddTodo(text)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value
    setValue(text)
  }
  return (
    <div>
      <label htmlFor='todo' className='block text-md font-medium text-gray-700'>
        <div className='flex mt-1'>
          <input
            type='text'
            name='todo'
            id='todo'
            value={value}
            onKeyUpCapture={handleKeyUp}
            onChange={handleChange}
            className='px-2 py-3 shadow-sm text-md focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 bg-gray-100 rounded-md'
            placeholder='Shoppping, go karting, lunch, movie...'
          />
          <button
            type='button'
            onClick={() => handleAddTodo(value)}
            className='disabled:bg-gray-200 bg-blue-500 hover:bg-blue-700 m-1 px-6 ml-4 text-white rounded'
            disabled={!value.trim()}
          >
            Add
          </button>
        </div>
      </label>
    </div>
  )
}
