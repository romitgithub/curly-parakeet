import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import { classNames } from '../utils/styles'

interface OverflowMenuProps {
  options: Array<{ label: string; value: string }>
  onChange: (e: React.MouseEvent<HTMLButtonElement>, value: string) => void
}

export default function OverflowMenu({ options, onChange }: OverflowMenuProps) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}
          className='z-0 inline-flex justify-center w-full rounded-full px-2 py-2 bg-white text-sm font-medium text-gray-700'
        >
          <ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='z-40 origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {options.map(({ label, value }) => (
              <Menu.Item key={value}>
                {({ active }) => (
                  <button
                    type='button'
                    onClick={(e) => onChange(e, value)}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'w-full block px-4 py-2 text-sm text-left',
                    )}
                  >
                    {label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
