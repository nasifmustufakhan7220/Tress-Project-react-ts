import plantImage from "../../assets/pngtree-indoor-plant-flowerpot-png-image_11669796.png";


const Hero = () => {
    return (
        <>
            <section className="container mx-auto px-4 my-6">
                        <div className="grid grid-cols-12 bg-green-200">
                            <div className="col-span-7 space-y-2 p-5 max-w-75">
                                <h1 className="text-2xl font-bold">Bring Nature <br /> Into Your Home</h1>
                                <p className=" text-xl font-semibold">Beautiful plants for your home and garden.</p>
                                <button className="rounded-xl px-3 py-2 bg-green-700 text-white font-medium">Explore Plants</button>
                            </div>
                            <div className="col-span-5">
                                <img className="max-w-52.5" src={plantImage} alt=""/>
                            </div>
                        </div>
                    </section>            
        </>
    );
};

export default Hero;