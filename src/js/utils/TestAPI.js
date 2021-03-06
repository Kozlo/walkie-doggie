// src/js/utils/TestAPI.js

import request from 'superagent/lib/client';
import AuthStore from '../stores/AuthStore';

export default {

    getSuccess: (url) => {
        return new Promise((resolve, reject) => {
            request
                .get(url)
                .set('Authorization', 'Bearer ' + AuthStore.getJwt())
                .end((err, response) => {
                    if (err) reject(err);
                    resolve(JSON.parse(response.text))
                })
        });
    }
}
