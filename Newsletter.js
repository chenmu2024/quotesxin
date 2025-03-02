function Newsletter() {
    return (
        <div data-name="newsletter" className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full transform translate-x-1/2 -translate-y-1/2 rotate-animation"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100 rounded-full transform -translate-x-1/2 translate-y-1/2 rotate-animation" style={{animationDirection: 'reverse'}}></div>
                <div className="max-w-3xl mx-auto text-center relative z-10 stagger-animation">
                    <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-4">
                        Join Our Community
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold quote-font mb-4">
                        Get Daily Inspiration in Your Inbox
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Join thousands of wisdom seekers who start their day with our handpicked quotes.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 bg-white/80"
                        />
                        <button className="group px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition duration-300 font-semibold flex items-center justify-center">
                            Subscribe Now
                            <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </div>
    );
}
