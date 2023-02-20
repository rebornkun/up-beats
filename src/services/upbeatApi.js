import axios from "axios";

const baseUrl = "https://localhost:5000/api/v1/upbeats"

class upbeatDataService {

    requestSong(data){ //requestSong
        return axios.post(`${baseUrl}/requestsong`, data);
    }

}

export default new upbeatDataService();