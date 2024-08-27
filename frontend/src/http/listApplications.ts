import { getApiUrl, responseHandler, errorHandler } from './errorHandler'; 

export const listApplications = async (provider: string, originOwnerId: string) => {
    try {
        const apiUrl = getApiUrl();
        const response = await fetch(`${apiUrl}/applications`, {
            method: 'GET',
            headers: {
                'x-provider': provider,
                'x-origin-owner-id': originOwnerId,
            },
        });

        return await responseHandler(response);
    } catch (error) {
        errorHandler(error); 
    }
};
