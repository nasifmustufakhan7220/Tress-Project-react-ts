import type { TreesType } from "../../Type/type";

interface TreeType {
    tree: TreesType;
}

const Tree = ({tree}:TreeType) => {
    console.log(tree);
    return (
        <div>
            
        </div>
    );
};

export default Tree;