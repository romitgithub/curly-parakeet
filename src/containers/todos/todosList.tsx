import { ViewListIcon } from '@heroicons/react/outline'
import Todo from './todoItem'
import { TodoWithId } from './todosSlice'

interface TodoListProps {
  todos: TodoWithId[]
  onToggle: (id: string) => void
}

export default function TodosList({ todos, onToggle }: TodoListProps) {
  return (
    <div className='mt-8'>
      {todos.length ? (
        <ul className='divide-y-2'>
          {todos.map((todo: any) => (
            <Todo onToggle={onToggle} key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <div className='h-40 flex items-center justify-center'>
          <h3 className='text-sm font-medium text-gray-500 text-center'>No todos found.</h3>
        </div>
      )}
    </div>
  )
}
