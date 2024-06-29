import { useAppSelector } from "@/redux/hook";
import AddTodo from "./AddTodo";
import Todocard from "./Todocard";

const TodoContainer = () => {
    const todos = useAppSelector(state => state.todos.todos)
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