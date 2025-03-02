function CategoryTabs() {
    const categories = [
        { id: 'popular', name: 'Popular', icon: 'fa-star' },
        { id: 'motivation', name: 'Motivation', icon: 'fa-bolt' },
        { id: 'success', name: 'Success', icon: 'fa-trophy' },
        { id: 'life', name: 'Life', icon: 'fa-heart' },
        { id: 'wisdom', name: 'Wisdom', icon: 'fa-brain' },
        { id: 'love', name: 'Love', icon: 'fa-dove' }
    ];
    const [activeTab, setActiveTab] = React.useState('popular');
    
    return (
        <div data-name="category-tabs" className="container mx-auto px-4 mb-12">
            <div className="flex overflow-x-auto custom-scrollbar py-4 space-x-4">
                {categories.map((category) => (
                    <button 
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap flex items-center space-x-2
                            ${activeTab === category.id 
                                ? 'bg-indigo-600 text-white shadow-lg transform -translate-y-0.5' 
                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow'}`}
                    >
                        <i className={`fas ${category.icon}`}></i>
                        <span>{category.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
