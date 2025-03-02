function Footer() {
    return (
        <footer data-name="site-footer" className="bg-gray-50 py-12 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div data-name="footer-logo" className="text-2xl font-bold quote-font mb-4 md:mb-0">
                        Daily<span className="gradient-text">Quotes</span>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-indigo-600 transition">About</a>
                        <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
                        <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Privacy</a>
                    </div>
                </div>
                <div className="text-center mt-8 text-gray-500">
                    © 2024 DailyQuotes. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
