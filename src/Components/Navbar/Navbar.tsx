

const Navbar = () => {
    return (
        <>
            <header className="container mx-auto px-4 py-6">
                    <nav className="flex items-center justify-between">
                        <div className="text-xl">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <span className="text-2xl font-bold text-green-700">GreenLeaf</span>
                        <div className="text-xl">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                    </nav>

                    
            </header>
        </>
    );
};

export default Navbar;