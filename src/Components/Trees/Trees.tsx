import { use } from "react";
import type { TreesType } from "../../Type/type";
import Tree from "../Tree/Tree";

interface TreesProps {
    treesPromises: Promise<TreesType[]>;
}
const Trees = ({treesPromises}:TreesProps) => {
    const trees = use(treesPromises);
    return (
        <div className="grid grid-cols-2 gap-4 px-4 my-6">
            {
                trees.map(tree=> <Tree key={tree.id} tree={tree}></Tree>)
            }
        </div>
    );
};

export default Trees;