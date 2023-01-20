/*
 * Asses the current performance of the system
 */
import http from 'k6/http';
import { sleep } from 'k6';

// peak load to
const peak_load = 100;

// 99% of requests must complete under 150ms 
const threshold = 'p(99)<150';


export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '5m', target: peak_load },
    { duration: '10m', target: peak_load },
    { duration: '5m', target: 0 },
  ],
  thresholds: {
    http_req_duration: [threshold],
  }
}

const api_url = '';
export default () => {

}