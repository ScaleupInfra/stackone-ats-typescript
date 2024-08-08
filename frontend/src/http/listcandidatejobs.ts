
export const fetchAccountIds = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/stackone/accounts`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const accountsData = await response.json();
    return accountsData.map((account: { id: string }) => account.id);
  } catch (error) {
    console.error('Error fetching accounts:', error);
    return [];
  }
};


export const fetchJobsForAllAccounts = async (): Promise<any[]> => {
  try {
    const accountIds = await fetchAccountIds();
    const jobPostingsPromises = accountIds.map(id => 
      fetch(`${process.env.REACT_APP_API_BASE_URL}/stackone/job_postings`, {
        method: 'GET',
        headers: {
          'x-account-id': id,
        },
      }).then(response => response.json())
    );

    const jobPostingsData = await Promise.all(jobPostingsPromises);
    return jobPostingsData.flatMap((data: any) => data.data || []);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};
