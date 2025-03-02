function App() {
    return (
        <div data-name="app-container">
            <Header />
            <Hero />
            <CategoryTabs />
            <QuoteList />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
