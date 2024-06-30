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
import { useAddTodoMutation } from "@/redux/api/api";
import { DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const AddTodo = () => {
    const [task, settask] = useState('')
    const [description, setdescription] = useState('')
    const [priority, setpriority] = useState('')
    // const dispatch = useAppDispatch()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [addtodo, object] = useAddTodoMutation()
    const handleSUbmit = (e: FormEvent) => {
        e.preventDefault()


        const taskDetail = {
            title: task,
            description: description,
            priority: priority
        }
        //    dispatch(addtodo(taskDetail))

        addtodo(taskDetail)

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
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                description
                            </Label>
                            <Select onValueChange={(value) => setpriority(value)}  >

                                <SelectTrigger>
                                    <SelectValue placeholder="Select a verified email to display" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                                </SelectContent>
                            </Select>
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