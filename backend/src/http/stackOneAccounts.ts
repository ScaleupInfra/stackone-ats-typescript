import axios from "axios";
import config from "../config";
import { AxiosError } from '../errors/axiosErrorHandler';

export const getAllAccounts = async () => {
    const url: string = config.STACKONE_BASE_URL + "/accounts";
    try {
        const response = await axios.get(url, {
            headers: {
                'accept': 'application/json',
                'authorization': `Basic ${config.STACKONE_API_KEY}`,
            },
        });

        return response.data;
    } catch (error) {
        AxiosError(error);
    }
}