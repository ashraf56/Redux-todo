import { Button } from "../ui/button";
import { Card } from "../ui/card";

const Todocard = () => {
    return (
        <div className="my-3">
            <Card className=" max-w-7xl h-14 flex justify-between items-center mx-auto px-10">
                <input type="checkbox" value="" />
                <p>Title</p>
                <p>time</p>
                <p>description</p>
                <div className="space-x-3">
                <Button size={"sm"}>Del</Button>
                <Button size={"sm"}>Update</Button>
                </div>
            </Card>
        </div>
    );
};

export default Todocard;