function QuoteList() {
    const [quotes, setQuotes] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchQuotes() {
            try {
                const data = await getQuotes();
                setQuotes(data);
                setLoading(false);
            } catch (error) {
                reportError(error);
                setLoading(false);
            }
        }
        fetchQuotes();
    }, []);

    if (loading) {
        return (
            <div data-name="loading" className="flex justify-center items-center min-h-[400px]">
                <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div data-name="quote-list" className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quotes.map((quote) => (
                    <QuoteCard key={quote.id} quote={quote} />
                ))}
            </div>
        </div>
    );
}
