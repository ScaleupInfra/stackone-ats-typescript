import { getJobs, getApplications, getPostedJobs } from '../http/stackOneAts';


export const listAllJobs = async (accountId: string, next: string) => {
  return await getJobs(accountId, next);
};


export const listAllApplications = async (accountId: string, next: string) => {
  return await getApplications(accountId, next);
};


export const listPostedJobs = async (accountId: string, next: string) => {
  return await getPostedJobs(accountId, next);
};
