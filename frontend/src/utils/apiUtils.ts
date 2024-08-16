export const getApiUrl = (): string => {
    const apiUrl = process.env.REACT_APP_API_ATS_URL;
    if (!apiUrl) {
        throw new Error('API base URL is not defined in environment variables');
    }
    return apiUrl;
};

export const handleResponse = async (response: Response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};

export const handleError = (error: unknown) => {
    console.error('API Error:', error);
    throw error;
};
