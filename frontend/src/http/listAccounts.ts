export const listAccounts = async () => {
  try {
    const apiUrl = process.env.REACT_APP_API_ATS_URL;
    if (!apiUrl) {
      throw new Error('API base URL is not defined in environment variables');
    }

    const response = await fetch(`${apiUrl}/accounts`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
};
