import { use } from "react";
import type { IBtnTypes } from "../../Type/btn";
import CatagoryBtn from "../CatagoryBtn/CatagoryBtn";

interface ICatagoriesProps{
    buttonPromise: Promise<IBtnTypes[]>
}
const CatagoriesBtn = ({buttonPromise}:ICatagoriesProps) => {

    const btns = use(buttonPromise);
    console.log(btns);

    return (
        <section className="max-w-122.5 mx-auto px-5 py-4">

            <div className="grid grid-cols-2 gap-3">

                {
                    btns.map(btn=> <CatagoryBtn key={btn.id} btn={btn} />)
                }
            </div>
        </section>
    );
};

export default CatagoriesBtn;