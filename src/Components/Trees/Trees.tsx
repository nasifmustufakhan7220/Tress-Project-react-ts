import { use } from "react";
import type { TreesType } from "../../Type/type";
import Tree from "../Tree/Tree";

interface TreesProps {
    treesPromises: Promise<TreesType[]>;
}
const Trees = ({treesPromises}:TreesProps) => {
    const trees = use(treesPromises);
    return (
        <div className="container mx-auto px-4 my-6">
            <h1 className="text-[17px] font-bold mb-4">Our Plants</h1>
            <div className="grid grid-cols-2 gap-4 ">
                {
                    trees.map(tree=> <Tree key={tree.id} tree={tree}></Tree>)
                }
            </div>
        </div>
    );
};

export default Trees;