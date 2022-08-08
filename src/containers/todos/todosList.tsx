import Todo from './todoItem'
import { TodoWithId } from './todosSlice'

interface TodoListProps {
  todos: TodoWithId[]
  onToggle: (id: string) => void
}

export default function TodosList({ todos, onToggle }: TodoListProps) {
  console.log(todos)

  return (
    <div className='mt-8'>
      <ul className='divide-y-2'>
        {todos.map((todo: any) => (
          <Todo onToggle={onToggle} key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}
