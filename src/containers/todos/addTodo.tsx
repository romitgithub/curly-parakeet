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
    <div className='bg-emerald-500 text-white px-4 md:py-8 py-6'>
      <h1 className='text-white text-2xl font-semibold text-center'>
        What do you want to do?
      </h1>
      <label htmlFor='todo' className='block text-md font-medium text-gray-700 max-w-md mx-auto mt-8'>
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
          <p className='text-xs text-white mt-2 text-center'>Press enter to add todo</p>
        </div>
      </label>
    </div>
  )
}
