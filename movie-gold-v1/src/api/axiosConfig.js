import axios from "axios";

export default axios.create({
    baseURL:
        "https://1cc8-2409-40f2-1014-43a3-e57f-2944-af6a-a9b4.ngrok-free.app",
    headers: { "ngrok-skip-browser-warning": "true" },
});