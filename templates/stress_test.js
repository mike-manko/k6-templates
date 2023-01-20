/*
 * Determines limits of the system
 */

import http from 'k6/http';
import { sleep } from 'k6';

// below normal load
const bellow_normal = 100;
// normal load
const normal = 200;
// breaking point
const breaking_point = 300;
// beyond breaking
const beyond_breaking = 400;


export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '2m', target: bellow_normal },
    { duration: '5m', target: bellow_normal },
    { duration: '2m', target: normal },
    { duration: '5m', target: normal },
    { duration: '2m', target: breaking_point },
    { duration: '5m', target: breaking_point },
    { duration: '2m', target: beyond_breaking },
    { duration: '10m', target: 0 }, // recovery
  ],
}

const api_url = '';
export default () => {

}