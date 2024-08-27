// import express, { Request, Response } from 'express';
// import { listAllApplications, listAllJobs, listPostedJobs, createApplication } from '../service/atsService';
// import { handleErrorResponse } from '../routes/routesErrorHandler';

// const router = express.Router();

// router.get('/jobs', async (req: Request, res: Response) => {
//   const { query, headers } = req;
//   const next: string = query.next as string;
//   const accountId: string = headers['x-account-id'] as string;

//   try {
//     const jobs = await listAllJobs(accountId, next);
//     res.status(200).send(jobs);
//   } catch (error: unknown) {
//     handleErrorResponse(error, res); 
//   }
// });

// router.get('/applications', async (req: Request, res: Response) => {
//   const { query, headers } = req;
//   const next: string = query.next as string;
//   const accountId: string = headers['x-account-id'] as string;

//   try {
//     const applications = await listAllApplications(accountId, next);
//     res.status(200).send(applications);
//   } catch (error: unknown) {
//     handleErrorResponse(error, res); 
//   }
// });

// router.get('/job-postings', async (req: Request, res: Response) => {
//   const { query, headers } = req;
//   const next: string = query.next as string;
//   const accountId: string = headers['x-account-id'] as string;

//   try {
//     const postedJobs = await listPostedJobs(accountId, next);
//     res.status(200).send(postedJobs);
//   } catch (error: unknown) {
//     handleErrorResponse(error, res); 
//   }
// });

// router.post('/applications', async (req: Request, res: Response) => {
//   const { headers, body } = req;
//   const accountId: string = headers['x-account-id'] as string;
//   const applicationData = body;

//   try {
//     const newApplication = await createApplication(accountId, applicationData);
//     res.status(201).send(newApplication);
//   } catch (error: unknown) {
//     handleErrorResponse(error, res); 
//   }
// });

// export default router;


import express, { Request, Response } from 'express';
import { listAllApplications, listAllJobs, listPostedJobs, createApplication } from '../service/atsService';
import { handleErrorResponse } from '../routes/routesErrorHandler';
import { fetchAccountIdMiddleware } from '../middleware/accountMiddleware'; // Import the middleware

const router = express.Router();

router.get('/jobs', fetchAccountIdMiddleware, async (req: Request, res: Response) => {
  const { query } = req;
  const next: string = query.next as string;
  const accountId: string = res.locals.accountId; // Retrieved from middleware

  try {
    const jobs = await listAllJobs(accountId, next);
    res.status(200).send(jobs);
  } catch (error: unknown) {
    handleErrorResponse(error, res); 
  }
});

router.get('/applications', fetchAccountIdMiddleware, async (req: Request, res: Response) => {
  const { query } = req;
  const next: string = query.next as string;
  const accountId: string = res.locals.accountId; // Retrieved from middleware

  try {
    const applications = await listAllApplications(accountId, next);
    res.status(200).send(applications);
  } catch (error: unknown) {
    handleErrorResponse(error, res); 
  }
});

router.get('/job-postings', fetchAccountIdMiddleware, async (req: Request, res: Response) => {
  const { query } = req;
  const next: string = query.next as string;
  const accountId: string = res.locals.accountId; // Retrieved from middleware

  try {
    const postedJobs = await listPostedJobs(accountId, next);
    res.status(200).send(postedJobs);
  } catch (error: unknown) {
    handleErrorResponse(error, res); 
  }
});

router.post('/applications', fetchAccountIdMiddleware, async (req: Request, res: Response) => {
  const { body } = req;
  const accountId: string = res.locals.accountId; 
  const applicationData = body;

  try {
    const newApplication = await createApplication(accountId, applicationData);
    res.status(201).send(newApplication);
  } catch (error: unknown) {
    handleErrorResponse(error, res); 
  }
});

export default router;
