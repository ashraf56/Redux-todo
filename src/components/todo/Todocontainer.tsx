import AddTodo from "./AddTodo";
import Todocard from "./Todocard";

const TodoContainer = () => {
    return (
        <div>
            <div>
                <AddTodo></AddTodo>
            </div>
            <div className="bg-cyan-500 w-full rounded-2xl   p-5  my-5">
           <Todocard></Todocard>
           <Todocard></Todocard>
           <Todocard></Todocard>
           <Todocard></Todocard>
        </div>
        </div>
    );
};

export default TodoContainer;