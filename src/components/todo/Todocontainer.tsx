import Todocard from "./Todocard";

const TodoContainer = () => {
    return (
        <div>
            <div className="bg-cyan-500 w-full rounded-2xl   p-5 mt-10">
           <Todocard></Todocard>
           <Todocard></Todocard>
           <Todocard></Todocard>
           <Todocard></Todocard>
        </div>
        </div>
    );
};

export default TodoContainer;