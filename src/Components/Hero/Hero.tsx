import plantImage from "../../assets/pngtree-indoor-plant-flowerpot-png-image_11669796.png";


const Hero = () => {
    return (
        <>
            <section className="container mx-auto px-4 my-6">
                <div className="bg-green-200">
                    <div className="mx-auto px-4">
                        <div className="grid grid-cols-2">
                    
                            <div className="min-w-0 p-5 space-y-2">
                                <h1 className="text-xl font-bold">
                                    Bring Nature <br />
                                    Into Your Home
                                </h1>

                                <p className="text-[16px] font-semibold">
                                    Beautiful plants for your home and garden.
                                </p>

                                <button className="rounded-xl px-3 py-2 bg-green-700 text-white font-medium">
                                    Explore Plants
                                </button>
                            </div>

                            <div className="min-w-0">
                                <img
                                    className="w-full max-w-52.5"
                                    src={plantImage}
                                    alt=""
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>     
        </>
    );
};

export default Hero;