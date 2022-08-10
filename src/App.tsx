import Todos from './containers/todos'

function App() {
  return (
    <div className='h-full w-full bg-white'>
      <h1 className='text-2xl font-semibold text-center py-6'>What do you want to do?</h1>
      <Todos />
    </div>
  )
}

export default App
