import Todo from './todoItem'
import { TodosState } from './todosSlice'

export default function TodosList({ todos }: TodosState) {
  console.log(todos)

  return (
    <div className='mt-8'>
      <h1>Your todos:</h1>
      <ul className='divide-y-2 mt-2'>
        {todos.map((todo: any) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}
