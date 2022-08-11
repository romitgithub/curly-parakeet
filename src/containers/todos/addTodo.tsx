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
    <div className='bg-emerald-500 text-white px-4 pb-4'>
      <label htmlFor='todo' className='block text-md font-medium text-gray-700 max-w-md mx-auto'>
        <div className='relative flex flex-col'>
          <input
            type='text'
            name='todo'
            id='todo'
            value={value}
            onKeyUpCapture={handleKeyUp}
            onChange={handleChange}
            className='px-2 py-3 shadow-lg text-md border-0 focus:ring-0 focus:border-0 block w-full bg-white rounded-lg'
            placeholder='Shoppping, go karting, lunch, movie...'
          />
          <p className='text-xs text-white mt-1 text-center'>Press enter to add todo</p>
          {/* <button
            type='button'
            onClick={() => handleAddTodo(value)}
            className='sm:text-sm text-xs uppercase absolute inset-y-0.5 right-0.5 disabled:bg-gray-200 bg-blue-500 hover:bg-blue-700 m-1 px-3 text-white rounded-full'
            disabled={!value.trim()}
          >
            Add
          </button> */}
        </div>
      </label>
    </div>
  )
}
