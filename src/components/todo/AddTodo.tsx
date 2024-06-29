import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addtodo } from "@/redux/features/todoslice";
import { useAppDispatch } from "@/redux/hook";
import { DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";

const AddTodo = () => {
    const [task, settask] = useState('')
    const [description, setdescription] = useState('')
    const dispatch = useAppDispatch()
    const handleSUbmit = (e: FormEvent) => {
        e.preventDefault()
            const  randomid = Math.random().toString(32).substring(2,5)
        
            
        const taskDetail = {
            id:randomid,
            title: task,
            description: description
        }
       dispatch(addtodo(taskDetail))



    }
    return (
        <div>

            <Dialog>
                <DialogTrigger asChild  >
                    <Button variant="outline">Add TODO</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add a Task</DialogTitle>
                        <DialogDescription>
                            Make  your task here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSUbmit} className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                onBlur={(e) => settask(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                description
                            </Label>
                            <Input
                                onBlur={(e) => setdescription(e.target.value)}
                                className="col-span-3"
                            />
                        </div>

                        <DialogClose asChild>
                            <Button type="submit">Save changes</Button>
                        </DialogClose>
                    </form>
                </DialogContent>
            </Dialog>



        </div>
    );
};

export default AddTodo;