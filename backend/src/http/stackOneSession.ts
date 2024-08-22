import axios from "axios";
import config from "../config";
import { AxiosError } from './errorHandler';

export const getSessionToken = async () => {

    const url: string = config.STACKONE_BASE_URL + "/connect_sessions";
    try {
        const origin_owner_id = config.ORIGIN_OWNER_ID;
        const origin_owner_name = config.ORIGIN_OWNER_NAME;
        const now = new Date();
       const formattedTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + now.getMilliseconds();
       console.log("fetching time before api call" + formattedTime);
        const response = await axios.post(url, {
            expires_in: 1800,
            multiple: false,
            origin_owner_id: origin_owner_id,
            origin_owner_name: origin_owner_name
        }, {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'authorization': `Basic ${config.STACKONE_API_KEY}`,
            },
        });
        const now2 = new Date();
        const formattedTime2 = now2.getHours() + ":" + now2.getMinutes() + ":" + now2.getSeconds() + "." + now2.getMilliseconds();
       console.log("fetching time after api call" + formattedTime2);

        return response.data;
    } catch (error) {
        AxiosError(error);
    }
}