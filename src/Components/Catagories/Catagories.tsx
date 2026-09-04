const Catagories = () => {
    const handelOnClickForAll = ()=>{
        
    }
    return (
        <section className="px-5 py-4">

            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold">
                    Categories
                </h2>

                <span className="text-sm">
                    See All
                </span>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-4 gap-3">

                {/* All */}
                <div className="flex h-16 flex-col items-center justify-center rounded-xl bg-green-700 text-white shadow-md">
                    <i onClick={handelOnClickForAll} className="fa-solid fa-leaf mb-1 text-xl"></i>
                    <span className="text-xs">All</span>
                </div>

                {/* Fruit Tree */}
                <div className="flex h-16 flex-col items-center justify-center rounded-xl bg-white shadow-md">
                    <i className="fa-solid fa-leaf mb-1 text-xl text-green-700"></i>
                    <span className="text-xs">Fruit Tree</span>
                </div>

                {/* Flowering */}
                <div className="flex h-16 flex-col items-center justify-center rounded-xl bg-white shadow-md">
                    <i className="fa-solid fa-clover mb-1 text-xl text-green-700"></i>
                    <span className="text-xs">Flowering</span>
                </div>

                {/* Shade Tree */}
                <div className="flex h-16 flex-col items-center justify-center rounded-xl bg-white shadow-md">
                    <i className="fa-solid fa-tree mb-1 text-xl text-green-700"></i>
                    <span className="text-xs">Shade Tree</span>
                </div>

                {/* Medicinal */}
                <div className="flex h-16 flex-col items-center justify-center rounded-xl bg-white shadow-md">
                    <i className="fa-solid fa-seedling mb-1 text-xl text-green-700"></i>
                    <span className="text-xs">Medicinal</span>
                </div>

                {/* Timber */}
                <div className="flex h-16 flex-col items-center justify-center rounded-xl bg-white shadow-md">
                    <i className="fa-solid fa-tree mb-1 text-xl text-green-700"></i>
                    <span className="text-xs">Timber</span>
                </div>

                {/* Evergreen */}
                <div className="flex h-16 flex-col items-center justify-center rounded-xl bg-white shadow-md">
                    <i className="fa-solid fa-tree mb-1 text-xl text-green-700"></i>
                    <span className="text-xs">Evergreen</span>
                </div>

                {/* More */}
                <div className="flex h-16 flex-col items-center justify-center rounded-xl bg-white shadow-md">
                    <i className="fa-solid fa-ellipsis mb-1 text-xl text-green-700"></i>
                    <span className="text-xs">More</span>
                </div>

            </div>
        </section>
    );
};

export default Catagories;