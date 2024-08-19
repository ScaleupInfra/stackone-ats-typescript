import { getApiUrl, responseHandler,errorHandler } from './errorHandler'; 

export const listAccounts = async () => {
    try {
        const apiUrl = getApiUrl();
        const response = await fetch(`${apiUrl}/accounts`, {
            method: 'GET',
        });

        return await responseHandler(response);
    } catch (error) {
        errorHandler(error); 
    }
};