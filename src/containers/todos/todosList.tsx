import Todo from './todoItem'
import { TodoWithId } from './todosSlice'

interface TodoListProps {
  todos: TodoWithId[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (todo: TodoWithId) => void
}

export default function TodosList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
  return (
    <div className='overflow-scroll'>
      {todos.length ? (
        <ul className='space-y-1 pb-20'>
          {todos.map((todo: any) => (
            <Todo
              onEdit={onEdit}
              onToggle={onToggle}
              onDelete={onDelete}
              key={todo.id}
              todo={todo}
            />
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
