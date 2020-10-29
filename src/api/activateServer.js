import axios from 'axios';

const activateServer = () => {
    const data = JSON.stringify({"message": "keepAlive"});

    const config = {
        method: 'post',
        url: 'https://china-cafe.herokuapp.com/keepalive',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config);
};
export default activateServer;