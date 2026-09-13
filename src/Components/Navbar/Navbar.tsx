import type { ITreesType } from "../../Type/type";

interface ICartsProps{
    carts: ITreesType[]
}

const Navbar = ({carts}:ICartsProps) => {

    const hendelCartItems = ()=>{
        console.log("helo");
    }
    

    return (
        <header className="max-w-122.5 mx-auto px-4 py-6">
            <nav className="flex items-center justify-between">

                
                <div className="text-xl">
                    <i className="fa-solid fa-bars"></i>
                </div>

                <span className="text-2xl font-bold text-green-700">
                    GreenLeaf
                </span>

                
                <div className="relative text-2xl">
                    <i onClick={hendelCartItems} className="fa-solid fa-cart-shopping"></i>

                   <span className="absolute -top-3 -right-3 flex h-6 min-w-6 items-center justify-center rounded-full bg-green-700 px-1 text-sm font-bold text-white">
                        {carts.length}
                    </span>
                    
                </div>

            </nav>
        </header>
    );
};

export default Navbar;