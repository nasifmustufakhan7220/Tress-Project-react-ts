import { use, type Dispatch, type SetStateAction } from "react";
import type { ITreesType } from "../../Type/type";
import AllPlant from "../AllPlant/AllPlant";

interface IAllPlantsProps{
    allPlantsPromise: Promise<ITreesType[]>
    carts: ITreesType[];
    setCarts: Dispatch<SetStateAction<ITreesType[]>>
}

const AllPlants = ({allPlantsPromise, carts, setCarts}:IAllPlantsProps) => {
    const plants = use(allPlantsPromise)
    return (
        <div className="container mx-auto px-4 my-6">
            <h1 className="text-[17px] font-bold mb-4">All Plants</h1>
            <div className="grid grid-cols-1 gap-4 ">
                {
                    plants.map(plant=> <AllPlant 
                        key={plant.id} plant={plant} 
                        carts={carts} setCarts={setCarts}
                        />)
                }
            </div>
        </div>
    );
};

export default AllPlants;