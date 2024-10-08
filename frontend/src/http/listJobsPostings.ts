import { getApiUrl, responseHandler, errorHandler } from './errorHandler';

export const listJobsPostings = async (provider: string, originOwnerId: string) => {
    try {
        const apiUrl = getApiUrl();
        const response = await fetch(`${apiUrl}/jobs`, {
            method: 'GET',
            headers: {
                'x-provider': provider,
                'x-origin-owner-id': originOwnerId,
                accept: 'application/json',
            },
        });
        const data = await responseHandler(response);
        return data;
    } catch (error) {
        errorHandler(error); 
    }
};

