import { listAccounts } from './listAccounts';


export const fetchAccountIds = async (): Promise<string[]> => {
  try {
    const accountsData = await listAccounts();
    return accountsData.map((account: { id: string }) => account.id);
  } catch (error) {
    console.error('Error fetching account IDs:', error);
    return [];
  }
};


export const fetchJobsForAllAccounts = async (): Promise<any[]> => {
  try {
    const accountIds = await fetchAccountIds();
    

    const jobPostingsPromises = accountIds.map(async (id) => {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/stackone/job_postings`, {
        method: 'GET',
        headers: {
          'x-account-id': id,
        },
      });
      const data = await response.json();
      
      
      return (data.data || []).map((job: any) => ({
        ...job,
        accountId: id, 
      }));
    });

    const jobPostingsData = await Promise.all(jobPostingsPromises);
    return jobPostingsData.flat(); 
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};
