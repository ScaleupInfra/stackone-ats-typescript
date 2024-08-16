import { getApiUrl, handleResponse, handleError } from '../utils/apiUtils'; 

export const createApplication = async (accountId: string, applicationData: unknown) => {
    try {
        const apiUrl = getApiUrl();
        const response = await fetch(`${apiUrl}/applications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-account-id': accountId,
                accept: 'application/json',
            },
            body: JSON.stringify(applicationData),
        });

        const result = await handleResponse(response);
        return result.id;
    } catch (error) {
        handleError(error); 
    }
};