import axios from 'axios';
import base64 from 'react-native-base64';
import Cookies from 'js-cookie';

const url = "https://backend-dot-foundation-staging-305217.uc.r.appspot.com/api/v1";
let config = {
    headers: {
        "withCredentials": true,
        "Access-Control-Allow-Origin": "*",
        // "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYxODg3ODYyNiwianRpIjoiZTVkZGFkZWYtNWFhZi00NGNiLWJiZDgtY2RmNjllZTdlZTkyIiwibmJmIjoxNjE4ODc4NjI2LCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoiMzA5Nzg2NDgtYjJlYi00ZjIyLWE3YWQtZjQ0ZjhlMWRkYjY5IiwiZXhwIjoxNjE4OTIxODI2fQ.YT378r4SgkDRhDY5DXN4zOMbdBv-tTvJnOSvGWQL9VI"
        // "access_token_cookie": Cookies.get("access_token_cookie")
    }
}

export async function login(params, success, failure) {
    config.headers.Authorization = 'Basic ' + base64.encode(params.username + ":" + params.password);

    axios.post(url + '/login', {}, config).then((response) => {
        console.log("this is my response: ", response);
        Cookies.set('access_token_cookie', response.data.access_token);
        Cookies.set('refresh_token_cookie', response.data.refresh_token);
        success();
    }).catch((error) => {
        console.log("this is my error: ", error);
        failure();
    })
}

export async function getAccountPageData(success, failure) {

    config.headers.Authorization = "Bearer " + Cookies.get("access_token_cookie");
    console.log('this is my headers ', config);

    axios.get(url + '/ulinc_configs', config).then((response) => {
        console.log("this is my response for account page: ", response);
        success(response);
    }).catch((error) => {
        console.log("this is my error: ", error);
        failure();
    })
}