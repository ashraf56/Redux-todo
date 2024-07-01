import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { removeTodo } from "@/redux/features/todoslice";
import { useUpdatetogleTodoMutation } from "@/redux/api/api";
import { useAppDispatch } from "@/redux/hook";

type TodoProps={
    _id:string
    title:string
    description:string
    isCompleted?:boolean,
    priority?:string

}
const Todocard = ({title,description,_id,isCompleted,priority}:TodoProps) => {
   const dispatch = useAppDispatch()
const [updatetogleTodo]=useUpdatetogleTodoMutation()
    const toogleCheck =()=>{
        const info={
            id:_id,
            data:{
                title,description,
                isCompleted:!isCompleted
                ,priority  
            }
        }
      
      console.log(info);
      
        updatetogleTodo(info)
    }
    return (
        <div className="my-3">
            <Card className=" max-w-7xl h-14 flex justify-between items-center mx-auto px-10">
                <input type="checkbox"  onChange={toogleCheck} />
                <div className="w-5">
                    {isCompleted  === true ? 
                <p >Done</p>   : <p>pending...</p> 
                }
                </div>
                <div className="w-5">
                   
                <p >{priority}</p> 
                
                </div>
                <p>{title}</p>
                <p>{description}</p>
                <div className="space-x-3">
                <Button size={"sm"}  onClick={()=>dispatch(removeTodo(_id))}>Del</Button>
                <Button size={"sm"}>Update</Button>
                </div>
            </Card>
        </div>
    );
};

export default Todocard;