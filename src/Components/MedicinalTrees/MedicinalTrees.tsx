import type { TreesType } from "../../Type/type";
import Plant from "../Plant/Plant";

interface IMedicinalTreesProps{
    categoryPlants: TreesType[];
}

const MedicinalTrees = ({categoryPlants}:IMedicinalTreesProps) => {
    console.log(categoryPlants);
    return (
        <div className="container mx-auto px-4 my-6">
            <h1 className="text-[17px] font-bold mb-4">Medicinal Plants</h1>
            <div className="grid grid-cols-1 gap-4">
                {
                    categoryPlants.map(tree =><Plant key={tree.id} tree={tree}/>)
                }
            </div>
        </div>
    );
};

export default MedicinalTrees;