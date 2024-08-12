export const createApplication = async (accountId: string, applicationData: any) => {
    try {
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      if (!apiUrl) {
        throw new Error('API base URL is not defined in environment variables');
      }
  
      const response = await fetch(`${apiUrl}/stackone/applications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-account-id': accountId,
          accept: 'application/json',
        },
        body: JSON.stringify(applicationData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      return result.id; 
     
    } catch (error) {
      console.error('Error creating application:', error);
      throw error;
    }
  };
  