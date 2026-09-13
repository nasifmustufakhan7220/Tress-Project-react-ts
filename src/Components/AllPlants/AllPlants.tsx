import { use } from "react";
import type { ITreesType } from "../../Type/type";
import AllPlant from "../AllPlant/AllPlant";

interface IAllPlantsProps{
    allPlantsPromise: Promise<ITreesType[]>
}

const AllPlants = ({allPlantsPromise}:IAllPlantsProps) => {
    const plants = use(allPlantsPromise)
    return (
        <div className="container mx-auto px-4 my-6">
            <h1 className="text-[17px] font-bold mb-4">All Plants</h1>
            <div className="grid grid-cols-1 gap-4 ">
                {
                    plants.map(plant=> <AllPlant key={plant.id} plant={plant} />)
                }
            </div>
        </div>
    );
};

export default AllPlants;