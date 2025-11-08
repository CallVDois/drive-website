import RestClient from "../restClient";

const token = import.meta.env.VITE_DRIVE_API_TOKEN;
const apiUrl = import.meta.env.VITE_DRIVE_API_URL;

const api = new RestClient(
    apiUrl,
    {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        timeout: 10000,
    }
)

export default api;
