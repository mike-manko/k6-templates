/*
 * Asses the current performance of the system
 */
import http from 'k6/http';
import { sleep } from 'k6';

// peak load to
const peak_load = 400;


export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '2m', target: peak_load }, // ramp up
    { duration: '5h56m', target: peak_load }, // stay @ N
    { duration: '2m', target: 0 }, // scale down
  ],
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  thresholds: {
    http_req_duration: [threshold],
  }
>>>>>>> aad14fb85191dbb592f3fdda1b487110d3ddd124
>>>>>>> d3f7dcaf0c538a5e06bb8139e98820483a6f2858
}

const api_url = '';
export default () => {

}