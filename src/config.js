import dotenv from 'dotenv';

dotenv.config();

let config = { api_host: process.env.REACT_APP_BASE_URL }


export { config };