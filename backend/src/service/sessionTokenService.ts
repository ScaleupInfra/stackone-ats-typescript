import { getSessionToken } from '../http/stackOneSession';

export const connectStackOneSession = async () => {
  // Read these values from environment variables
  const origin_owner_id = process.env.ORIGIN_OWNER_ID;
  const origin_owner_name = process.env.ORIGIN_OWNER_NAME;

  if (!origin_owner_id || !origin_owner_name) {
    throw new Error('Environment variables ORIGIN_OWNER_ID or ORIGIN_OWNER_NAME are not defined');
  }

  return await getSessionToken(origin_owner_id, origin_owner_name);
};
