const axios = require('axios');

class HelloClientAPI {
    constructor(host, port) {
        this.axios = axios.create({baseURL: `http://${host}:${port}`});
    }

    Hello(name) {
        return this.axios.get(`/hello/${name}`);
    }

    Healhcheck() {
        return this.axios.get('healthcheck');
    }

    Get(path) {
        return this.axios.get(path);
    }
}

module.exports = {
    HelloClientAPI,
};