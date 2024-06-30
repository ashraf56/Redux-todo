import { useState } from "react";
import AddTodo from "./AddTodo";
import Todocard from "./Todocard";
 import { useGetTodoQuery } from "@/redux/api/api";
import Filtertodo from "./Filtertodo";

const TodoContainer = () => {
    // const todos = useAppSelector(state => state.todos.todos)
 const [priority,setPriority] = useState('')
 const {data,isLoading} = useGetTodoQuery(priority)
console.log(priority);

 if (isLoading) {
    return <p>Loading.....</p>
 }


    return (
        <div>
            <div className="flex justify-between">
                <AddTodo></AddTodo>
                <Filtertodo priority={priority} setPriority={setPriority}></Filtertodo>
            </div>
            <div className="bg-cyan-500 w-full rounded-2xl   p-5  my-5">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data?.data?.map((item:any)=>( 
                <Todocard {...item} key={item._id}></Todocard>
            ))
          }
        </div>
        </div>
    );
};

export default TodoContainer;