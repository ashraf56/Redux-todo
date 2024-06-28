import { Button } from "../ui/button";
import { Card } from "../ui/card";

const Todocard = () => {
    return (
        <div>
            <Card className="w-full max-w-7xl flex justify-between items-center mx-auto px-10">
                <input type="checkbox" value="" />
                <p>Title</p>
                <p>time</p>
                <p>description</p>
                <div className="space-x-3">
                <Button>Del</Button>
                <Button>Update</Button>
                </div>
            </Card>
        </div>
    );
};

export default Todocard;