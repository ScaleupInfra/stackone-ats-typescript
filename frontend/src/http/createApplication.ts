import { getApiUrl, responseHandler, errorHandler } from './errorHandler'; 

export const createApplication = async (provider: string, originOwnerId: string, applicationData: unknown) => {
    try {
        const apiUrl = getApiUrl();
        const response = await fetch(`${apiUrl}/applications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-provider': provider,
                'x-origin-owner-id': originOwnerId,
                accept: 'application/json',
            },
            body: JSON.stringify(applicationData),
        });

        const result = await responseHandler(response);
        return result.id;
    } catch (error) {
        errorHandler(error); 
    }
};
