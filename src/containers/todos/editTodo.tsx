import { CheckCircleIcon as CheckCircleOutline } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { Todo, TodoWithId } from './todosSlice'

interface EditTodoProps {
  todo: TodoWithId | null
  onSave: (id: string, todo: Todo) => void
}

export default function EditTodo({ todo, onSave }: EditTodoProps) {
  const [completed, setCompleted] = useState(todo?.completed || false)
  const [text, setText] = useState(todo?.text || '')

  const toggleStatus = () => {
    setCompleted(!completed)
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSave = () => {
    if (!todo) return

    onSave(todo.id, { completed, text })
  }

  return (
    <div>
      <div className='flex flex-col items-center justify-between'>
        <h2 className='text-xl mb-4 font-semibold'>Edit Todo</h2>
        <div className='border-b py-4 border-gray-500 w-full max-w-md flex flex-row items-center'>
          {completed ? (
            <CheckCircleIcon
              onClick={toggleStatus}
              className='cursor-pointer w-8 h-8 text-green-500'
            />
          ) : (
            <CheckCircleOutline onClick={toggleStatus} className='cursor-pointer  w-8 h-8' />
          )}
          <input
            type='text'
            onChange={handleTextChange}
            className='px-2 py-2 ml-4 text-md border-0 focus:border-0 focus:ring-0 block w-full bg-white rounded-lg'
            value={text}
          />
        </div>
        <button
          onClick={handleSave}
          type='submit'
          className='px-6 py-2 bg-emerald-500 text-white rounded mt-4'
        >
          Save
        </button>
      </div>
    </div>
  )
}
