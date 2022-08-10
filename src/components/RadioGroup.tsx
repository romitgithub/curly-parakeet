interface RadioGroupProps {
  options: any[]
  defaultChecked: string
  onChange: (id: string) => void
}

export default function RadioGroup({ options, defaultChecked, onChange }: RadioGroupProps) {
  return (
    <div className='mx-auto my-4 flex items-center w-fit'>
      {options.map((option) => (
        <div key={option.id} className='flex items-center p-2 mx-2 md:mx-4 cursor-pointer'>
          <input
            id={option.id}
            name='notification-method'
            type='radio'
            onChange={() => onChange(option.id)}
            value={option.id}
            defaultChecked={option.id === defaultChecked}
            className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 cursor-pointer'
          />
          <label
            htmlFor={option.id}
            className='pl-3 block text-sm font-medium text-gray-700 cursor-pointer'
          >
            {option.title}
          </label>
        </div>
      ))}
    </div>
  )
}
