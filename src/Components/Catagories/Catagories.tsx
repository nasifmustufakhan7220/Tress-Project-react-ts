import { use, useState } from "react";
import type { TreesType } from "../../Type/type";
import OurTrees from "../OurTrees/OurTrees";

interface ICatagoriesProps {
    treesPromise: Promise<TreesType[]>;
}

const Catagories = ({ treesPromise }: ICatagoriesProps) => {
    const trees = use(treesPromise);

    const [isSelected, setIsSelected] = useState<string>("all");

    const handleCategoryClick = (selectedCatagory:string) => {
        setIsSelected(selectedCatagory);
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
                    onClick={()=>handleCategoryClick("all")}
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
                <button onClick={()=>handleCategoryClick("fruit")}
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
                <button onClick={()=>handleCategoryClick("flower")}
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
                <button onClick={()=>handleCategoryClick("shadeTree")}
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
                <button onClick={()=>handleCategoryClick("medicinal")}
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
                <button onClick={()=>handleCategoryClick("timber")}
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
                <button onClick={()=> handleCategoryClick("evergreen")}
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
                   isSelected === "all" && <OurTrees trees={trees}/>
                   
                }
                {
                    isSelected === "fruit" && <p>Fruit tree</p>
                }
                {
                    isSelected === "flower" && <p>flower tree</p>
                }
                {
                    isSelected === "shadeTree" && <p>shadeTree tree</p>
                }
                {
                    isSelected === "medicinal" && <p>medicinal tree</p>
                }
                {
                    isSelected === "timber" && <p>timber tree</p>
                }
                {
                    isSelected === "evergreen" && <p>evergreen tree</p>
                }
            </div>

        </section>
    );
};

export default Catagories;