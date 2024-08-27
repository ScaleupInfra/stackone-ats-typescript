// import { getApiUrl, responseHandler,errorHandler } from './errorHandler'; 

// export const listAccounts = async () => {
//     try {
//         const apiUrl = getApiUrl();
//         const response = await fetch(`${apiUrl}/accounts`, {
//             method: 'GET',
//         });

//         return await responseHandler(response);
//     } catch (error) {
//         errorHandler(error); 
//     }
// };

import { getApiUrl, responseHandler, errorHandler } from './errorHandler'; 

export const listAccounts = async () => {
    try {
        const apiUrl = getApiUrl();
        const response = await fetch(`${apiUrl}/accounts`, {
            method: 'GET',
        });

        const accountsData = await responseHandler(response);
        return accountsData.map((account: { provider: string; origin_owner_id: string }) => ({
            provider: account.provider,
            originOwnerId: account.origin_owner_id,
        }));
    } catch (error) {
        errorHandler(error); 
        return [];
    }
};
