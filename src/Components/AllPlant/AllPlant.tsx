import type { Dispatch, SetStateAction } from "react";
import type { ITreesType } from "../../Type/type";

interface IAllPlantProps{
    plant: ITreesType;
    carts: ITreesType[];
    setCarts: Dispatch<SetStateAction<ITreesType[]>>
}
const AllPlant = ({plant, carts, setCarts}:IAllPlantProps) => {
    const {image, name, category, price} = plant;

    const hendleAddToCart = ()=>{
        const newPlant = [...carts, plant];
        setCarts(newPlant);
    }

    
    return (
        <div className="min-w-0 w-full">
            <div className="w-full rounded-xl bg-white p-1 shadow-md">

                <div className="relative">
                    <img
                        src={image}
                        alt="Mango Tree"
                        className="h-36 w-full rounded-xl object-cover"
                    />

                    <button className="absolute right-2 top-2 text-2xl text-white">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>

                <div className="px-2 pb-2 pt-3">
                    <h3 className="text-lg font-bold">
                        {name}
                    </h3>

                    <p className="text-green-700">
                        {category}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                        <p className="text-xl font-bold text-green-700">
                            ${price}
                        </p>

                        <button onClick={hendleAddToCart}
                         className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-700 text-white cursor-pointer">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllPlant;