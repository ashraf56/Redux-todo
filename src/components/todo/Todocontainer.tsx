import AddTodo from "./AddTodo";
import Todocard from "./Todocard";
 import { useGetTodoQuery } from "@/redux/api/api";

const TodoContainer = () => {
    // const todos = useAppSelector(state => state.todos.todos)

 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const {data,isLoading,error} = useGetTodoQuery(undefined)

 if (isLoading) {
    return <p>Loading.....</p>
 }


    return (
        <div>
            <div>
                <AddTodo></AddTodo>
            </div>
            <div className="bg-cyan-500 w-full rounded-2xl   p-5  my-5">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data?.data?.map((item:any)=>( 
                <Todocard {...item}></Todocard>
            ))
          }
        </div>
        </div>
    );
};

export default TodoContainer;