function QuoteCard({ quote }) {
    const [isLiked, setIsLiked] = React.useState(false);
    const [isBookmarked, setIsBookmarked] = React.useState(false);

    return (
        <div data-name="quote-card" className="quote-card bg-white rounded-2xl p-8 group">
            <div className="relative mb-6">
                <i className="fas fa-quote-left text-4xl text-indigo-100 group-hover:text-indigo-200 transition-colors duration-300"></i>
                <div className="absolute top-0 left-0 w-12 h-12 bg-indigo-500 rounded-full opacity-10 transform -translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            <p className="text-2xl text-gray-800 mb-8 leading-relaxed quote-font group-hover:text-gray-900 transition-colors duration-300">
                "{quote.content}"
            </p>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="relative">
                        <img 
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(quote.author)}&background=random&size=128`} 
                            alt={quote.author}
                            className="w-12 h-12 rounded-full border-2 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                            loading="lazy"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-4">
                        <h3 className="font-semibold text-gray-800">{quote.author}</h3>
                        <div className="flex items-center">
                            <span className="text-sm text-gray-500">{quote.category}</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-sm text-gray-500">2m ago</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button 
                        onClick={() => setIsLiked(!isLiked)}
                        className={`transition-all duration-300 transform hover:scale-110 ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                        title={isLiked ? "Unlike" : "Like"}
                    >
                        <i className={`${isLiked ? 'fas' : 'far'} fa-heart text-xl`}></i>
                    </button>
                    <button 
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className={`transition-all duration-300 transform hover:scale-110 ${isBookmarked ? 'text-indigo-500' : 'text-gray-400 hover:text-indigo-500'}`}
                        title={isBookmarked ? "Remove Bookmark" : "Bookmark"}
                    >
                        <i className={`${isBookmarked ? 'fas' : 'far'} fa-bookmark text-xl`}></i>
                    </button>
                    <button 
                        className="text-gray-400 hover:text-indigo-500 transition-all duration-300 transform hover:scale-110"
                        title="Share"
                    >
                        <i className="far fa-share-square text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
