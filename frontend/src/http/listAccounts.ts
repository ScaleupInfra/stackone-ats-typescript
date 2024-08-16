import { getApiUrl, handleResponse, handleError } from '../utils/apiUtils'; 

export const listAccounts = async () => {
    try {
        const apiUrl = getApiUrl();
        const response = await fetch(`${apiUrl}/accounts`, {
            method: 'GET',
        });

        return await handleResponse(response);
    } catch (error) {
        handleError(error); 
    }
};