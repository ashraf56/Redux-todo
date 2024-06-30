import { useAppSelector } from "@/redux/hook";
import AddTodo from "./AddTodo";
import Todocard from "./Todocard";
// import { useGetTodoQuery } from "@/redux/api/api";

const TodoContainer = () => {
    const todos = useAppSelector(state => state.todos.todos)

// const {data:todos,isLoading,error} = useGetTodoQuery(undefined)


    return (
        <div>
            <div>
                <AddTodo></AddTodo>
            </div>
            <div className="bg-cyan-500 w-full rounded-2xl   p-5  my-5">
          {
            todos.map((item)=>( 
                <Todocard {...item}></Todocard>
            ))
          }
        </div>
        </div>
    );
};

export default TodoContainer;