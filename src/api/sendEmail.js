import axios from 'axios';

const sendEmail = message => {
    const data = JSON.stringify({"message": message});

    const config = {
        method: 'post',
        url: 'https://china-cafe.herokuapp.com/sendemail',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config);
};
export default sendEmail;

