import { use, useState } from "react";
import type { TreesType } from "../../Type/type";
import AllPlants from "../AllPlants/AllPlants";
import FruitsTrees from "../FruitTress/FruitsTrees";
import FlowersTrees from "../FlowersTrees/FlowersTrees";
import ShadeTrees from "../ShadeTrees/ShadeTrees";
import MedicinalTrees from "../MedicinalTrees/MedicinalTrees";
import TimberTrees from "../TimberTrees/TimberTrees";
import EverGreenTrees from "../EverGreenTrees/EverGreenTrees";

interface ICatagoriesProps {
    treesPromise: Promise<TreesType[]>;
    catagoryFetch: (id:number)=> Promise<TreesType[]>;
}

const Catagories = ({ treesPromise,catagoryFetch }: ICatagoriesProps) => {
    const plants = use(treesPromise);

    const [isSelected, setIsSelected] = useState<string>("all");
    const [categoryPlants, setCategoryPlants] = useState<TreesType[]>([]);

    const handleCategoryClick = async (selectedCatagory:string, id:number) => {
        setIsSelected(selectedCatagory);

        if(id !== 0){
            const plants = await catagoryFetch(id);
            setCategoryPlants(plants);
        }else{
            return;
        }
    };
    return (
        <section className="max-w-122.5 mx-auto px-5 py-4">

            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold">
                    Categories
                </h2>

                <button
                    type="button"
                    className="text-sm"
                >
                    See All
                </button>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-4 gap-3">

                {/* All */}
                <button
                    type="button"
                    onClick={()=>handleCategoryClick("all",0)}
                    className={`flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl shadow-md ${
                        isSelected === "all"
                            ? "bg-green-700 text-white"
                            : "bg-white text-green-700"
                    }`}
                >
                    <i className="fa-solid fa-leaf mb-1 text-xl"></i>

                    <span className="text-xs">
                        All
                    </span>
                </button>

                {/* Fruit Tree */}
                <button onClick={()=>handleCategoryClick("fruit",1)}
                    type="button"
                   className={`flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl shadow-md ${
                        isSelected === "fruit"
                            ? "bg-green-700 text-white"
                            : "bg-white text-green-700"
                    }`}
                >
                    <i className="fa-solid fa-leaf mb-1 text-xl"></i>

                    <span className="text-xs">
                        Fruit Tree
                    </span>
                </button>

                {/* Flowering */}
                <button onClick={()=>handleCategoryClick("flower", 2)}
                    type="button"
                    className={`flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl shadow-md ${
                        isSelected === "flower"
                            ? "bg-green-700 text-white"
                            : "bg-white text-green-700"
                    }`}
                >
                    <i className="fa-solid fa-clover mb-1 text-xl"></i>

                    <span className="text-xs">
                        Flowering
                    </span>
                </button>

                {/* Shade Tree */}
                <button onClick={()=>handleCategoryClick("shadeTree", 3)}
                    type="button"
                     className={`flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl shadow-md ${
                        isSelected === "shadeTree"
                            ? "bg-green-700 text-white"
                            : "bg-white text-green-700"
                    }`}
                >
                    <i className="fa-solid fa-tree mb-1 text-xl"></i>

                    <span className="text-xs">
                        Shade Tree
                    </span>
                </button>

                {/* Medicinal */}
                <button onClick={()=>handleCategoryClick("medicinal", 4)}
                    type="button"
                     className={`flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl shadow-md ${
                        isSelected === "medicinal"
                            ? "bg-green-700 text-white"
                            : "bg-white text-green-700"
                    }`}
                >
                    <i className="fa-solid fa-seedling mb-1 text-xl"></i>

                    <span className="text-xs">
                        Medicinal
                    </span>
                </button>

                {/* Timber */}
                <button onClick={()=>handleCategoryClick("timber", 5)}
                    type="button"
                     className={`flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl shadow-md ${
                        isSelected === "timber"
                            ? "bg-green-700 text-white"
                            : "bg-white text-green-700"
                    }`}
                >
                    <i className="fa-solid fa-tree mb-1 text-xl"></i>

                    <span className="text-xs">
                        Timber
                    </span>
                </button>

                {/* Evergreen */}
                <button onClick={()=> handleCategoryClick("evergreen", 6)}
                    type="button"
                     className={`flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl shadow-md ${
                        isSelected === "evergreen"
                            ? "bg-green-700 text-white"
                            : "bg-white text-green-700"
                    }`}
                >
                    <i className="fa-solid fa-tree mb-1 text-xl"></i>

                    <span className="text-xs">
                        Evergreen
                    </span>
                </button>
                

            </div>

            {/* Tree Cards */}
            <div className="mt-6 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                   isSelected === "all" && <AllPlants plants={plants}/>
                   
                }
                {
                    isSelected === "fruit" && <FruitsTrees categoryPlants={categoryPlants}/>
                }
                {
                    isSelected === "flower" && <FlowersTrees categoryPlants={categoryPlants}/>
                }
                {
                    isSelected === "shadeTree" && <ShadeTrees categoryPlants={categoryPlants}/>
                }
                {
                    isSelected === "medicinal" && <MedicinalTrees categoryPlants={categoryPlants}/>
                }
                {
                    isSelected === "timber" && <TimberTrees categoryPlants={categoryPlants}/>
                }
                {
                    isSelected === "evergreen" && <EverGreenTrees categoryPlants={categoryPlants}/>
                }
            </div>

        </section>
    );
};

export default Catagories;