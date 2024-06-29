// import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { TTodo } from "@/redux/features/todo/todoSlice";
import { useDeleteTodoMutation, useUpdateTodoToggleMutation } from "@/redux/api/api";
import UpdateTodo from "./UpdateTodo";


type TTodoCardProps = {
  todo: TTodo;
};

const TodoCard = ({ todo }: TTodoCardProps) => {
  // console.log('todo',todo)
  // const dispatch = useAppDispatch();
  const [deleteTodo] = useDeleteTodoMutation();

  const [updateTodoToggle, { isLoading }] = useUpdateTodoToggleMutation();
  

  

  const toggleState=()=>{
    // dispatch(toggleComplete(id));
    const taskData = {
      title:todo.title,
      description:todo.description,
      isCompleted: !todo.isCompleted,
      priority:todo.priority,
    };
  // console.log(taskData);
  const options = {
    id: todo._id,
    data: taskData,
  };
  updateTodoToggle(options);
}

  

  return (
    <div>
      <div className="bg-white rounded-md flex justify-between p-3 items-center border">
        <input
          className="mr-5"
          onChange={toggleState}
          type="checkbox"
          name="complete"
          id="complete"
          defaultChecked={todo?.isCompleted}
        />
        <p className="font-semibold flex-1">{todo?.title}</p>
        <div className="flex-1 flex justify-center items-center gap-2">
          <div
            className={`size-3 rounded-full 
          ${todo.priority === "high" ? "bg-red-500" : null}
          ${todo.priority === "medium" ? "bg-yellow-500" : null}
          ${todo.priority === "low" ? "bg-green-500" : null}
          `}
          ></div>
          <p>{todo?.priority}</p>
        </div>
        <div className="flex-1">
          {todo.isCompleted ? (
            <p className="text-green-500">Done</p>
          ) : (
            <p className="text-red-500">Pending</p>
          )}
        </div>
        <p className="flex-[2]">{todo?.description}</p>
        <div className="space-x-5 ">
          <Button onClick={() => deleteTodo(todo?._id)} className="bg-red-500">
            <svg
              className="size-5"
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              ></path>
            </svg>
          </Button>
          <UpdateTodo id={todo?._id} />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;