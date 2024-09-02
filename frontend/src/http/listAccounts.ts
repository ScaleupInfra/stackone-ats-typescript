import { getApiUrl, responseHandler, errorHandler } from './errorHandler'; 

export const listAccounts = async () => {
    try {
        const apiUrl = getApiUrl();
        const response = await fetch(`${apiUrl}/accounts`, {
            method: 'GET',
        });

        const accountsData = await responseHandler(response);
       return accountsData;
    } catch (error) {
        
        errorHandler(error); 
        return [];
    }
};
