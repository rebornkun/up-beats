import axios from "axios";

const baseUrl = "http://localhost:5000/api/v1/upbeats"

class upbeatDataService {

    getGuestCode(){ //requestSong
        return axios.get(`${baseUrl}/getguestcode`);
    }

    registerUser(data){ //registerUser
        return axios.post(`${baseUrl}/register`, data);
    }

    loginUser(data){ //loginUser
        return axios.post(`${baseUrl}/login`, data);
    }

    requestSong(data){ //requestSong
        return axios.post(`${baseUrl}/requestsong`, data);
    }

    getDjByUsername(dj_username){ //getDjByUsername
        return axios.get(`${baseUrl}/getdj/:${dj_username}`);
    }

}

export default new upbeatDataService();