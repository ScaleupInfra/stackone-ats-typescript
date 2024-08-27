// import { listAccounts } from './listAccounts';
// import { getApiUrl, responseHandler, errorHandler } from './errorHandler'; 
// import { JobPosting } from '../components/ListCandidateJobs';

// export const fetchAccountIds = async (): Promise<string[]> => {
//   try {
//     const accountsData = await listAccounts();
//     return accountsData.map((account: { id: string }) => account.id);
//   } catch (error) {
//     errorHandler(error); 
//     return [];
//   }
// };

// export const fetchJobsForAllAccounts = async (): Promise<JobPosting[]> => {
//   try {
//     const accountIds = await fetchAccountIds();
//     const apiUrl = getApiUrl();

//     const jobPostingsPromises = accountIds.map(async (id) => {
//       const response = await fetch(`${apiUrl}/job-postings`, {
//         method: 'GET',
//         headers: {
//           'x-account-id': id,
//         },
//       });
//       const data = await responseHandler(response); 

//       return (data.data || []).map((job: JobPosting) => ({
//         ...job,
//         accountId: id,
//       }));
//     });

//     const jobPostingsData = await Promise.all(jobPostingsPromises);
//     return jobPostingsData.flat();
//   } catch (error) {
//     errorHandler(error); 
//     return [];
//   }
// };

import { listAccounts } from './listAccounts';
import { getApiUrl, responseHandler, errorHandler } from './errorHandler'; 
import { JobPosting } from '../components/ListCandidateJobs';

export const fetchAccountIdentifiers = async (): Promise<{ provider: string; origin_owner_id: string }[]> => {
    try {
        const accountsData = await listAccounts();
        return accountsData;
    } catch (error) {
        errorHandler(error); 
        return [];
    }
};

export const fetchJobsForAllAccounts = async (): Promise<JobPosting[]> => {
    try {
        const accountIdentifiers = await fetchAccountIdentifiers();
        const apiUrl = getApiUrl();

        const jobPostingsPromises = accountIdentifiers.map(async ({ provider, origin_owner_id }) => {
            const response = await fetch(`${apiUrl}/job-postings`, {
                method: 'GET',
                headers: {
                    'x-provider': provider,
                    'x-origin-owner-id': origin_owner_id,
                },
            });
            const data = await responseHandler(response);

            return (data.data || []).map((job: JobPosting) => ({
                ...job,
                provider,
                origin_owner_id,
            }));
        });

        const jobPostingsData = await Promise.all(jobPostingsPromises);
        return jobPostingsData.flat();
    } catch (error) {
        errorHandler(error); 
        return [];
    }
};

