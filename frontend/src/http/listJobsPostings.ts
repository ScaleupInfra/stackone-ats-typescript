import { getApiUrl, handleResponse, handleError } from '../utils/apiUtils';

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

    const data = await handleResponse(response); 

    return data;
  } catch (error) {
    handleError(error); 
  }
};
