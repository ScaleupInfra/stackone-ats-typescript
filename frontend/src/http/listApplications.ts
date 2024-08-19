import { getApiUrl, responseHandler, errorHandler } from '../utils/apiUtils'; 

export const listApplications = async (accountId: string) => {
    try {
        const apiUrl = getApiUrl();
        const response = await fetch(`${apiUrl}/applications`, {
            method: 'GET',
            headers: {
                'x-account-id': accountId,
            },
        });

        return await responseHandler(response);
    } catch (error) {
        errorHandler(error); 
    }
};