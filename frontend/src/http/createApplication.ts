
export const createApplication = async (accountId: string, applicationData: unknown) => {
    try {
      const apiUrl = process.env.REACT_APP_API_ATS_URL;
      if (!apiUrl) {
        throw new Error('API base URL is not defined in environment variables');
      }
  
      const response = await fetch(`${apiUrl}/applications`, {
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
      return result.id; 
     
    } catch (error) {
      console.error('Error creating application:', error);
      throw error;
    }
  };
  