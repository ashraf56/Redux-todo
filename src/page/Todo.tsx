import TodoContainer from "@/components/todo/Todocontainer";

const Todo = () => {
    return (
        <div className="container">
            <h1 className=" font-bold text-center uppercase pt-10">todo page</h1>

            <TodoContainer></TodoContainer>
        </div>
    );
};

export default Todo;