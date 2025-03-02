function Hero() {
    return (
        <div data-name="hero-section" className="hero-gradient text-white py-32 px-4 mt-16 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2 float-animation"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full transform translate-x-1/2 translate-y-1/2 float-animation" style={{animationDelay: "2s"}}></div>
            </div>
            <div className="container mx-auto text-center relative z-10">
                <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
                    <i className="fas fa-sparkles mr-2"></i>
                    Inspiring Millions Daily
                </span>
                <h1 data-name="hero-title" className="text-5xl md:text-7xl font-bold quote-font mb-8 fade-in">
                    Find Your Daily
                    <span className="block mt-2">Inspiration</span>
                </h1>
                <p data-name="hero-subtitle" className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto fade-in">
                    Discover curated quotes that inspire and transform your perspective.
                </p>
                <div data-name="hero-search" className="max-w-xl mx-auto fade-in">
                    <div className="flex bg-white/10 backdrop-blur rounded-full p-2 shadow-xl">
                        <input 
                            type="text" 
                            placeholder="Search quotes..." 
                            className="w-full px-6 py-4 rounded-full bg-transparent text-white placeholder-white/70 focus:outline-none"
                        />
                        <button className="bg-white text-indigo-600 px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 font-semibold flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            <i className="fas fa-search mr-2"></i>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
