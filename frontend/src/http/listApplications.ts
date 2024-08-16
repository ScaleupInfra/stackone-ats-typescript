import { getApiUrl, handleResponse, handleError } from '../utils/apiUtils'; 

export const listApplications = async (accountId: string) => {
    try {
        const apiUrl = getApiUrl();
        const response = await fetch(`${apiUrl}/applications`, {
            method: 'GET',
            headers: {
                'x-account-id': accountId,
            },
        });

        return await handleResponse(response);
    } catch (error) {
        handleError(error); 
    }
};