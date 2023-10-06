const API_URL = 'https://quiz-c52ca-default-rtdb.firebaseio.com/quiz';

export const fetchQuizes = async () => {
    try {
        const response = await fetch(`${API_URL}.json`);

        if (!(response.status === 200 || response.status === 201)) {
            const error = await response.json();
            throw error;
        }
        const categories = await response.json();
        return categories;
    } catch (error) {
        return { error };
    }
};

export const fetchQuize = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}.json`);

        if (!(response.status === 200 || response.status === 201)) {
            const error = await response.json();
            throw error;
        }
        const cards = await response.json();
        return cards;
    } catch (error) {
        return { error };
    }
};
