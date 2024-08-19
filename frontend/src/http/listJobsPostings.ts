import { getApiUrl, responseHandler, errorHandler } from './errorHandler';

export const listJobsPostings = async (accountId: string) => {
  try {
    const apiUrl = getApiUrl(); 
    const response = await fetch(`${apiUrl}/jobs`, {
      method: 'GET',
      headers: {
        'x-account-id': accountId,
        'accept': 'application/json',
      },
    });

    const data = await responseHandler(response); 

    return data;
  } catch (error) {
    errorHandler(error); 
  }
};
