const Navbar = () => {
    

    return (
        <header className="container mx-auto px-4 py-6">
            <nav className="flex items-center justify-between">

                
                <div className="text-xl">
                    <i className="fa-solid fa-bars"></i>
                </div>

                <span className="text-2xl font-bold text-green-700">
                    GreenLeaf
                </span>

                
                <div className="relative text-2xl">
                    <i className="fa-solid fa-cart-shopping"></i>

                   <span className="absolute -top-3 -right-3 flex h-6 min-w-6 items-center justify-center rounded-full bg-green-700 px-1 text-sm font-bold text-white">
                        0
                    </span>
                    
                </div>

            </nav>
        </header>
    );
};

export default Navbar;