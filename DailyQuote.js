function DailyQuote() {
    const [showCopied, setShowCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('"The only way to achieve the impossible is to believe it is possible." - Charles Kingsleigh');
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
    };

    return (
        <div data-name="daily-quote" className="container mx-auto px-4 py-16">
            <div className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20">
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute transform rotate-12 -right-10 -top-10 w-40 h-40 bg-indigo-500 rounded-full filter blur-3xl rotate-animation"></div>
                    <div className="absolute transform -rotate-12 -left-10 -bottom-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl rotate-animation" style={{animationDirection: 'reverse'}}></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="text-center mb-12 stagger-animation">
                        <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-4">
                            Quote of the Day
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl quote-font leading-relaxed mb-8 text-balance">
                            "The only way to achieve the impossible is to believe it is possible."
                        </h2>
                        <div className="flex items-center justify-center space-x-4">
                            <img 
                                src="https://ui-avatars.com/api/?name=Charles+Kingsleigh&background=random&size=128" 
                                alt="Charles Kingsleigh"
                                className="w-16 h-16 rounded-full border-4 border-white shadow-lg hover-rotate"
                            />
                            <div className="text-left">
                                <h3 className="text-xl font-semibold">Charles Kingsleigh</h3>
                                <p className="text-gray-600">Alice in Wonderland</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4 stagger-animation">
                        <button className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-center space-x-2">
                            <i className="far fa-heart text-gray-500"></i>
                            <span>1.2K Likes</span>
                        </button>
                        <button 
                            onClick={handleCopy}
                            className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-center space-x-2 relative"
                        >
                            <i className="far fa-copy text-gray-500"></i>
                            <span>Copy Quote</span>
                            {showCopied && (
                                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black text-white text-sm rounded fade-in">
                                    Copied!
                                </span>
                            )}
                        </button>
                        <button className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-center space-x-2">
                            <i className="far fa-share-square text-gray-500"></i>
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
