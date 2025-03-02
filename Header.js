function Header() {
    return (
        <header data-name="site-header" className="bg-white header-shadow fixed w-full top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div data-name="logo" className="text-3xl font-bold quote-font">
                        Daily<span className="gradient-text">Quotes</span>
                    </div>
                    <nav data-name="navigation" className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Home</a>
                        <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Categories</a>
                        <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Authors</a>
                        <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Random</a>
                    </nav>
                    <div data-name="mobile-menu" className="md:hidden">
                        <button className="text-gray-600 hover:text-indigo-600">
                            <i className="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
