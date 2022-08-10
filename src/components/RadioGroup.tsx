import { useState } from 'react'
import { classNames } from '../utils/styles'

interface RadioGroupProps {
  options: any[]
  defaultChecked: string
  onChange: (id: string) => void
}

export default function RadioGroup({ options, defaultChecked, onChange }: RadioGroupProps) {
  const [selectedOption, setSelectedOption] = useState(defaultChecked)
  return (
    <div className='border-b border-gray-100 mx-auto mt-8 flex items-center w-full'>
      {options.map((option) => (
        <div
          role='radio'
          tabIndex={0}
          aria-checked={selectedOption === option.id}
          onClick={() => {
            setSelectedOption(option.id)
            onChange(option.id)
          }}
          key={option.id}
          className={classNames(
            'flex flex-1 justify-center items-center p-3 py-3 cursor-pointer rounded-t-xl',
            option.id === selectedOption ? 'text-emerald-400 rounded-t-xl' : 'text-gray-400',
          )}
        >
          {option.icon ? option.icon() : null}
          <label
            htmlFor={option.id}
            className={classNames(
              'pl-3 block text-sm font-medium cursor-pointer',
              option.id === selectedOption ? 'text-emerald-500' : 'text-gray-400',
            )}
          >
            {option.title}
          </label>
        </div>
      ))}
    </div>
  )
}
