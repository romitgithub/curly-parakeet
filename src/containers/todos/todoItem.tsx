import { TodoWithId } from './todosSlice'

export default function Todo({ todo }: { todo: TodoWithId }) {
  return (
    <li className='flex-center px-2 py-3'>
      <p className='text-xl'>{todo.text}</p>
    </li>
  )
}
