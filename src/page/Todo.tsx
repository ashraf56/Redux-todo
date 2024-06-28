import Todocard from "@/components/todo/Todocard";

const Todo = () => {
    return (
        <div className="bg-cyan-500 h-screen w-full p-5 ">
           <h1 className="text-white font-bold text-center uppercase mb-3">todo page</h1> 
           <Todocard></Todocard>
           <Todocard></Todocard>
           <Todocard></Todocard>
           <Todocard></Todocard>
        </div>
    );
};

export default Todo;