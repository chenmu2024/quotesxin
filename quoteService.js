async function getQuotes() {
    try {
        return [
            {
                id: 1,
                content: "Life is what happens while you're busy making other plans.",
                author: "John Lennon",
                category: "Life"
            },
            {
                id: 2,
                content: "The only way to do great work is to love what you do.",
                author: "Steve Jobs",
                category: "Success"
            },
            {
                id: 3,
                content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                author: "Winston Churchill",
                category: "Motivation"
            }
        ];
    } catch (error) {
        reportError(error);
        throw error;
    }
}
