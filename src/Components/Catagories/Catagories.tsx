
import { use, useState } from "react";

import type { TreesType } from "../../Type/type";

interface ICatagoriesProps {
    treesPromise: Promise<TreesType[]>;
}

const Catagories = ({ treesPromise }: ICatagoriesProps) => {
    const trees = use(treesPromise);
    console.log(trees);

    const [isSelected, setIsSelected] = useState<string>("");

    const handleCategoryClick = (selectedCatagory:string) => {
        setIsSelected(selectedCatagory);
    };
    return (
        <section className="px-5 py-4">

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
                <button
                    type="button"
                    className="flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl bg-white shadow-md"
                >
                    <i className="fa-solid fa-tree mb-1 text-xl"></i>

                    <span className="text-xs">
                        Shade Tree
                    </span>
                </button>

                {/* Medicinal */}
                <button
                    type="button"
                    className="flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl bg-white shadow-md"
                >
                    <i className="fa-solid fa-seedling mb-1 text-xl"></i>

                    <span className="text-xs">
                        Medicinal
                    </span>
                </button>

                {/* Timber */}
                <button
                    type="button"
                    className="flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl bg-white shadow-md"
                >
                    <i className="fa-solid fa-tree mb-1 text-xl"></i>

                    <span className="text-xs">
                        Timber
                    </span>
                </button>

                {/* Evergreen */}
                <button
                    type="button"
                    className="flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl bg-white shadow-md"
                >
                    <i className="fa-solid fa-tree mb-1 text-xl"></i>

                    <span className="text-xs">
                        Evergreen
                    </span>
                </button>

                {/* More */}
                <button
                    type="button"
                    className="flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl bg-white shadow-md"
                >
                    <i className="fa-solid fa-ellipsis mb-1 text-xl"></i>

                    <span className="text-xs">
                        More
                    </span>
                </button>

            </div>

            {/* Tree Cards
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    allTrees.map(tree => (
                        <Tree
                            key={tree.id}
                            tree={tree}
                        />
                    ))
                }
            </div> */}

        </section>
    );
};

export default Catagories;