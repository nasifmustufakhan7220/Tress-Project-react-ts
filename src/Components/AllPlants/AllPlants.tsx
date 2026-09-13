import type { TreesType } from "../../Type/type";
import Plant from "../Plant/Plant";

interface TreesProps {
    plants: TreesType[];
}
const AllPlants = ({plants}:TreesProps) => {
    
    return (
        <div className="container mx-auto px-4 my-6">
            <h1 className="text-[17px] font-bold mb-4">Our Plants</h1>
            <div className="grid grid-cols-1 gap-4 ">
                {
                    plants.map(plant=> <Plant key={plant.id} tree={plant}></Plant>)
                }
            </div>
        </div>
    );
};

export default AllPlants;