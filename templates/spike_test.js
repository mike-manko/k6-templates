/*
 * Spikes to extreme load over short period of time
 */
import http from 'k6/http';
import { sleep } from 'k6';

// below normal load
const bellow_normal = 100;
// spike
const spike = 1400


export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '10s', target: bellow_normal },
    { duration: '1m', target: bellow_normal },
    { duration: '10s', target: spike },
    { duration: '3m', target: spike },
    { duration: '10s', target: bellow_normal },
    { duration: '3m', target: bellow_normal },
    { duration: '10s', target: 0 },
  ],
}

const api_url = '';
export default () => {

}