import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementNByValue } from './redux/features/counter/counterSlice';

function App() {
  const { count } = useSelector((state) => state.counter)
  console.log(count)
  const dispatch = useDispatch();
  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div className='flex gap-10'>
          <button onClick={() => dispatch(incrementNByValue(5))} className='bg-green-200 p-4 rounded-full '>Increment 5</button>
          <button onClick={() => dispatch(increment())} className='bg-green-200 p-4 rounded-full '>Increment</button>
          <div>
            <h1 className='text-2xl font-bold p-4'>{count}</h1>
          </div>
          <button onClick={() => dispatch(decrement())} className='bg-red-200 p-4 rounded-full '>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
