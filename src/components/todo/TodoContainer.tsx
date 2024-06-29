
// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import UpdateTodo from "./UpdateTodo";

const TodoContainer = () => {
  const [priority, setPriority]= useState('');
  const [updateId, setUpdateId]= useState('');

  // const { todos } = useAppSelector((state) => state.todo);
  // const { filteredTodos } = useAppSelector((state) => state.todo);
  // const todosToDisplay = filteredTodos.length > 0 ? filteredTodos : todos;

// console.log("todos", todos);
// console.log("filteredTodos", filteredTodos);


  // from server
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);
// console.log("data", todos.data);
  if(isLoading){
    return <p>Loading.....</p>
  }
    return (
      <div>
        <div className="flex justify-between items-center mb-5">
          <AddTodoModal />
          <TodoFilter setPriority={setPriority} />
        </div>
        <div className="bg-primary-gradient w-full p-[5px] h-full rounded-xl ">
          <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
            {todos.data.length ? (
              <>
                {todos?.data?.map((todo: any) => (
                  <TodoCard key={todo._id} todo={todo} />
                ))}
              </>
            ) : (
              <>
                <div className="bg-white text-xl font-bold p-3 flex justify-center items-center rounded-md">
                  <p>There is no task pending</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default TodoContainer;