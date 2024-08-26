# Simplifying Integrations Across Disparate ATS: A Job Board Using StackOne

![stackone-banner](https://github.com/user-attachments/assets/e71fc1d5-e8aa-45ee-9b9c-90f0aa766434)


We need to manage job postings from different platforms like Greenhouse, Ashby, and Workday. Each one works separately, these systems will lead to different interfaces for each integration. To fix this, we want to combine these systems into one platform with a unified interface.

To address this, we are creating a unified job board that brings together job listings from all these platforms. This will enable the board to present all job postings in a single, consistent format, ensuring users have access to up-to-date listings from every ATS provider.

## The Traditional Approach Without StackOne
Without StackOne, integrating multiple ATS platforms means either custom coding each system or using a traditional iPaaS. Custom coding requires separate connections for each ATS, leading to a complex setup. An iPaaS, while helpful, comes with a steep learning curve and ongoing costs.

These methods are time-consuming and resource-intensive, making updates and maintenance challenging. In contrast, StackOne offers a unified interface, simplifying integration and reducing complexity, so you can focus on providing a seamless job board experience.

### Without Stackone:

![Untitled Diagram drawio (6)](https://github.com/user-attachments/assets/26b14f8e-8256-4918-99fb-cd92bf801f52)

### With Stackone:

![diagram1 drawio](https://github.com/user-attachments/assets/ba62ecc0-03a7-482d-aa06-97bdf5f30cbc)


## Integrating ATS Platforms with StackOne

### 1. Setting Up StackOne Connection:
   * To get started with StackOne, log in to the platform and navigate to the Integrations page from the dashboard. From there, you can easily link and manage connections with various ATS platforms.
   * For more detailed guidance on setting up these connections, refer to this documentation [here](https://stackone-60.mintlify.app/dashboard/accounts).

### 2. Generating API Key on StackOne:
   * To securely connect your application with StackOne, you’ll need to generate and manage API Key. These keys will authenticate your application and ensure secure data access.
   * For detailed steps on generating API key, refer to this documentation [here](https://stackone-60.mintlify.app/dashboard/api-keys).

### 3. Generating and Managing Session Tokens:

  To securely connect your application with StackOne, you'll need to generate and manage session tokens. These tokens authenticate your application and ensure that only authorized interactions occur.

   1. **Prepare the API Key:**
        - Ensure your API key is securely stored. This key is essential for authenticating requests when generating session tokens.
   2. **Generate and Store the Session Token Securely:**
        - Generate the session token, securely store it. Refer to this [Create connect-session](https://docs.stackone.com/reference/stackone_create_connect_session).
   3. **Using the Session Token:** 
        - Include the session token when initializing the StackOne Hub to securely display the interface for connecting accounts. Refer to [Detailed guide on embedding StackOne.](https://docs.stackone.com/docs/embedding-the-stackone-hub)

### 4. Managing Integrations Data
     
  The Integrations section of the StackOne dashboard allows you to manage integration (aka provider) for a StackOne Project. Manage, enable, and configure integrations for your StackOne 
  project using the [Integrations page](https://docs.stackone.com/docs/project-integrations).

## API Interaction Overview

  ![Untitled Diagram drawio (5)](https://github.com/user-attachments/assets/fea7ee9b-82bf-470a-9f7e-735f97bc9917)

- ### Exploring API Endpoints

  StackOne enables seamless integration with multiple ATS platforms, allowing you to capture and manage accounts, job postings, and applications through a consistent API interface.

**1\. Fetching Accounts Data**

* **Operation: [ Get Accounts ](https://docs.stackone.com/reference/stackone_list_linked_accounts)**  
* **Purpose**: This endpoint retrieves account data, including the `accountId`, which is necessary for fetching specific job and application data from StackOne. The `accountId` identifies which ATS platforms' data should be accessed.  

**2\. Fetching Job Data**

* **Operation: [ Get Jobs Data ](https://docs.stackone.com/reference/ats_list_jobs)**  
* **Purpose**: This endpoint fetches job data associated with the provided `accountId`. It allows the job board to retrieve job listings from StackOne that are aggregated from various ATS platforms.  

**3\. Fetching Job Applications**

* **Operation: [ Get Applications data ](https://docs.stackone.com/reference/ats_list_applications)**  
* **Purpose**: This endpoint retrieves application data related to the `accountId`. It provides a list of job applications, ensuring consistency and uniformity in the data from multiple ATS platforms.  

**4\.  Displaying Job Postings to Candidates**

* **Operation: [ Get Job postings data ](https://docs.stackone.com/reference/ats_list_job_postings)**  
* **Purpose**: This endpoint fetches all available job postings. It provides a comprehensive list of job opportunities for users to view and apply for on the job board.  

**5\. Applying for Jobs**

* **Operation: [ Create Application](https://docs.stackone.com/reference/ats_create_application)**  
* **Purpose**: This endpoint is used to submit a new job application. The job board sends the application details to StackOne, which forwards them to the appropriate ATS platform for processing.  

## Conclusion and Recommendations

**Conclusion**:

Integrating multiple ATS platforms into a unified job board with StackOne simplifies job management and provides a single, consistent interface for users. This centralization ensures up-to-date job listings and streamlined application processes.

**Recommendation:**

**Secure API Keys and Credentials:** Use environment variables to store sensitive information and implement access controls to restrict API key usage to authorized components and users.


---
