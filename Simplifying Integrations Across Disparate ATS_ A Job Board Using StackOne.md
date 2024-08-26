# Simplifying Integrations Across Disparate ATS: A Job Board Using StackOne

We need to manage job postings from different platforms like Greenhouse, Ashby, and Workday. Each one works separately, these systems will lead to different interfaces for each integration. To fix this, we want to combine these systems into one platform with a unified interface.

To address this, we are creating a unified job board that brings together job listings from all these platforms. This will enable the board to present all job postings in a single, consistent format, ensuring users have access to up-to-date listings from every ATS provider.


## Integrating ATS Platforms with StackOne

### 1. Setting Up StackOne Connection:
   * To get started with StackOne, log in to the platform and navigate to the Integrations page from the dashboard. From there, you can easily link and manage connections with various ATS platforms.
   * For more detailed guidance on setting up these connections, refer to this [stackone-60.mintlify.app/dashboard/accounts](https://stackone-60.mintlify.app/dashboard/accounts).

### 2. Generating API Keys on StackOne:
   * To securely connect your application with StackOne, you’ll need to generate API keys. These keys will authenticate your application and ensure secure data access.
   * For detailed steps on generating API keys, refer to this [stackone-60.mintlify.app/dashboard/api-keys](https://stackone-60.mintlify.app/dashboard/api-keys).

### 3. Generating and Managing Session Tokens:

  To securely connect your application with StackOne, you'll need to generate and manage session tokens. These tokens authenticate your application and ensure that only authorized interactions occur.

   1. **Prepare the API Key:**
        - Ensure your API key is securely stored. This key is essential for authenticating requests when generating session tokens.
   2. **Generate and Store the Session Token Securely:**
        - Generate the session token, securely store it. This token is necessary for authenticating any future API calls.
   3. **Using the Session Token:**
        - Include the session token in the Authorization header of any subsequent API requests to StackOne.
   4. **Managing Session Tokens:**
        - Token Expiration: Session tokens usually have a set expiration time (e.g., 1 hour, as indicated by the expires_in value). After expiration, generate a new token using the same process.
        - Revoking Tokens: If necessary, you can revoke session tokens through the StackOne platform’s API Management section, particularly in cases of security concerns.

### 4. Fetching Integrations Data

To retrieve available integrations data through StackOne, follow these steps:

**Step-by-Step Instructions:**
1. Use the following `curl` command to fetch the list of available integrations. Replace `YOUR_API_KEY` with your actual API key:
   curl \-X GET ``https://api.stackone.com/integrations \-H Authorization: Bearer YOUR\_API\_KEY``
2. The command will return a JSON response containing details about the available integrations. You can use this data to populate and display the integrations on your admin dashboard.  
3. Update the Dashboard: Integrate the fetched data into your admin dashboard to allow users to view, manage, and interact with the list of integrations.

## API Interaction Overview

  ![Untitled Diagram drawio (5)](https://github.com/user-attachments/assets/fea7ee9b-82bf-470a-9f7e-735f97bc9917)

- ### Exploring API Endpoints

  * StackOne enables seamless integration with multiple ATS platforms, allowing you to capture and manage accounts, job postings, and applications through a consistent API interface.

**1\. Fetching Accounts Data**

* **Operation [ Get Accounts ](https://docs.stackone.com/reference/stackone_list_linked_accounts)**  
* **Purpose**: This endpoint retrieves account data, including the `accountId`, which is necessary for fetching specific job and application data from StackOne. The `accountId` identifies which ATS platforms' data should be accessed.  

**2\. Fetching Job Data**

* **Operation [ Get Jobs Data ](https://docs.stackone.com/reference/ats_list_jobs)**  
* **Purpose**: This endpoint fetches job data associated with the provided `accountId`. It allows the job board to retrieve job listings from StackOne that are aggregated from various ATS platforms.  

**3\. Fetching Job Applications**

* **Operation [ Get Applications data ](https://docs.stackone.com/reference/ats_list_applications)**  
* **Purpose**: This endpoint retrieves application data related to the `accountId`. It provides a list of job applications, ensuring consistency and uniformity in the data from multiple ATS platforms.  

**4\.  Displaying Job Postings to Candidates**

* **Operation [ Get Job postings data ](https://docs.stackone.com/reference/ats_list_job_postings)**  
* **Purpose**: This endpoint fetches all available job postings. It provides a comprehensive list of job opportunities for users to view and apply for on the job board.  

**5\. Applying for Jobs**

* **Operation [ Create Application](https://docs.stackone.com/reference/ats_create_application)**  
* **Purpose**: This endpoint is used to submit a new job application. The job board sends the application details to StackOne, which forwards them to the appropriate ATS platform for processing.  

## Conclusion and Recommendations

**Conclusion**:

Integrating multiple ATS platforms into a unified job board with StackOne simplifies job management and provides a single, consistent interface for users. This centralization ensures up-to-date job listings and streamlined application processes.

**Recommendation:**

**Secure API Keys and Credentials:** Use environment variables to store sensitive information and implement access controls to restrict API key usage to authorized components and users.


---
