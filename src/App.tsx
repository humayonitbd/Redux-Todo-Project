import { useAppDispatch, useAppSelector } from "./redux/hook";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const {count} = useAppSelector((state)=>state.counter);
  const dispatch = useAppDispatch();


  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 rounded-md p-5">
        <button
          onClick={() => dispatch(decrement(2))}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Decrement
        </button>
        <h1 className="text-3xl mx-3 border px-4 rounded-md ">{count}</h1>
        <button
          onClick={() => dispatch(increment({value:2}))}
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
